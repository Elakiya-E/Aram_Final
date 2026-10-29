<?php
declare(strict_types=1);

/**
 * Aram Analytics - Project Brief enquiry endpoint.
 *
 * Receives a JSON POST from the homepage "Project Brief" form and delivers the
 * enquiry to the configured inbox over authenticated SMTP.
 *
 * This file is part of the static `public/` bundle, so Hostinger serves && runs
 * it directly as PHP while the rest of the site stays fully static.
 *
 * Configuration is server-side only and is never committed:
 *   1. Environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS, ...), or
 *   2. A `.env` file placed next to this script (see the project `.env.example`).
 *
 * No credentials are ever returned to the browser.
 */

/* -------------------------------------------------------------------------
 * Configuration loading
 * ---------------------------------------------------------------------- */

/**
 * Minimal .env reader. Real environment variables always win, so hosting
 * panels (or `SetEnv` directives) can override the file.
 */
function aram_load_dotenv(string $path): void
{
    if (!is_file($path) || !is_readable($path)) {
        return;
    }

    $lines = @file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
            continue;
        }

        $pos   = strpos($line, '=');
        $key   = trim(substr($line, 0, $pos));
        $value = trim(substr($line, $pos + 1));

        $len = strlen($value);
        if ($len >= 2) {
            $first = $value[0];
            $last  = $value[$len - 1];
            if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                $value = substr($value, 1, -1);
            }
        }

        if ($key === '' || getenv($key) !== false) {
            continue;
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
    }
}

aram_load_dotenv(__DIR__ . '/.env');

function aram_config(string $key, string $default = ''): string
{
    $value = getenv($key);
    if ($value === false || $value === '') {
        $env   = isset($_ENV[$key]) ? $_ENV[$key] : '';
        $value = ($env !== '') ? $env : $default;
    }

    return trim((string) $value);
}

$ARAM_CONFIG = [
    // Fixed recipient - never taken from the client.
    'to'        => aram_config('ENQUIRY_TO_EMAIL', 'aramanalytics2025@gmail.com'),
    'host'      => aram_config('SMTP_HOST', 'smtp.gmail.com'),
    'port'      => (int) aram_config('SMTP_PORT', '465'),
    // "ssl" = implicit TLS (465), "tls" = STARTTLS (587), "none" = plain.
    'secure'    => strtolower(aram_config('SMTP_SECURE', 'ssl')),
    'user'      => aram_config('SMTP_USER', ''),
    'pass'      => aram_config('SMTP_PASS', ''),
    'from'      => aram_config('SMTP_FROM', ''),
    'fromName'  => aram_config('SMTP_FROM_NAME', 'Aram Analytics Website'),
    'timezone'  => aram_config('ENQUIRY_TIMEZONE', 'Asia/Kolkata'),
];

if ($ARAM_CONFIG['from'] === '') {
    $ARAM_CONFIG['from'] = $ARAM_CONFIG['user'] !== '' ? $ARAM_CONFIG['user'] : 'no-reply@aramanalytics.com';
}

date_default_timezone_set($ARAM_CONFIG['timezone']);

/* -------------------------------------------------------------------------
 * Errors and HTTP helpers
 * ---------------------------------------------------------------------- */

final class AramError extends RuntimeException
{
    /** @var int */
    public $status;
    /** @var array<string, string> */
    public $fields;

    public function __construct(string $message, int $status = 400, array $fields = [])
    {
        parent::__construct($message);
        $this->status = $status;
        $this->fields = $fields;
    }
}

function aram_respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/* -------------------------------------------------------------------------
 * Sanitisation / escaping
 * ---------------------------------------------------------------------- */

function aram_strlen(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function aram_cut(string $value, int $max): string
{
    if (aram_strlen($value) <= $max) {
        return $value;
    }

    return function_exists('mb_substr')
        ? mb_substr($value, 0, $max, 'UTF-8')
        : substr($value, 0, $max);
}

/** Single-line field: strips control characters so nothing can inject headers. */
function aram_clean_line(string $value, int $max = 160): string
{
    $value = str_replace(["\r", "\n", "\0", "\t"], ' ', $value);
    $value = preg_replace('/[\x00-\x1F\x7F]/', '', $value);
    $value = trim((string) $value);

    return aram_cut($value, $max);
}

/** Multi-line field: keeps newlines but removes other control characters. */
function aram_clean_block(string $value, int $max = 5000): string
{
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $value);
    $value = trim((string) $value);

    return aram_cut($value, $max);
}

function aram_escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/* -------------------------------------------------------------------------
 * Rate limiting (per network address)
 * ---------------------------------------------------------------------- */

function aram_rate_limit(): void
{
    $ip     = isset($_SERVER['REMOTE_ADDR']) ? (string) $_SERVER['REMOTE_ADDR'] : 'unknown';
    $file   = sys_get_temp_dir() . '/aram_enquiry_' . hash('sha256', $ip) . '.json';
    $window = 900; // 15 minutes
    $limit  = 5;   // submissions allowed per window

    $handle = @fopen($file, 'c+');
    if ($handle === false) {
        // If we cannot track, fail open rather than blocking real enquiries.
        return;
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return;
        }

        $raw     = (string) stream_get_contents($handle);
        $decoded = $raw !== '' ? json_decode($raw, true) : [];
        $hits    = is_array($decoded) ? $decoded : [];

        $now  = time();
        $hits = array_values(array_filter($hits, function ($t) use ($now, $window) {
            return is_int($t) && $t > ($now - $window);
        }));

        if (count($hits) >= $limit) {
            throw new AramError(
                'Too many submissions from this network. Please try again in a few minutes.',
                429
            );
        }

        $hits[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($hits));
        fflush($handle);
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

/* -------------------------------------------------------------------------
 * MIME helpers
 * ---------------------------------------------------------------------- */

function aram_mime_encode(string $value): string
{
    if (preg_match('/^[\x20-\x7E]*$/', $value)) {
        return $value;
    }

    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function aram_base64_body(string $value): string
{
    return rtrim(chunk_split(base64_encode($value), 76, "\r\n"), "\r\n");
}

/* -------------------------------------------------------------------------
 * SMTP client (no external dependencies)
 * ---------------------------------------------------------------------- */

function aram_smtp_read($handle): string
{
    $response = '';
    while (($line = fgets($handle, 2048)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] !== '-') {
            break;
        }
    }

    if ($response === '') {
        throw new AramError('The mail server closed the connection unexpectedly.', 502);
    }

    return $response;
}

function aram_smtp_expect($handle, array $expected, string $context): string
{
    $response = aram_smtp_read($handle);
    $code     = (int) substr($response, 0, 3);

    if (!in_array($code, $expected, true)) {
        throw new AramError('SMTP ' . $context . ' failed.', 502);
    }

    return $response;
}

function aram_smtp_cmd($handle, string $command, array $expected, string $context): string
{
    fwrite($handle, $command . "\r\n");

    return aram_smtp_expect($handle, $expected, $context);
}

function aram_smtp_send(array $config, array $headers, string $body, string $recipient): void
{
    $timeout = 20;
    $wrapper = $config['secure'] === 'ssl' ? 'ssl://' : 'tcp://';
    $remote  = $wrapper . $config['host'] . ':' . $config['port'];

    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => true,
            'verify_peer_name'  => true,
            'allow_self_signed' => false,
            'SNI_enabled'       => true,
        ],
    ]);

    $errno  = 0;
    $errstr = '';
    $handle = @stream_socket_client(
        $remote,
        $errno,
        $errstr,
        $timeout,
        STREAM_CLIENT_CONNECT,
        $context
    );

    if ($handle === false) {
        throw new AramError('Could not connect to the mail server.', 502);
    }

    stream_set_timeout($handle, $timeout);

    try {
        aram_smtp_expect($handle, [220], 'greeting');

        $hostname = isset($_SERVER['SERVER_NAME']) ? (string) $_SERVER['SERVER_NAME'] : 'localhost';
        $ehlo     = aram_smtp_cmd($handle, 'EHLO ' . $hostname, [250], 'EHLO');

        if ($config['secure'] === 'tls') {
            aram_smtp_cmd($handle, 'STARTTLS', [220], 'STARTTLS');

            $methods = STREAM_CRYPTO_METHOD_TLS_CLIENT;
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
                $methods |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            }
            if (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
                $methods |= STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
            }

            if (@stream_socket_enable_crypto($handle, true, $methods) !== true) {
                throw new AramError('Could not start TLS with the mail server.', 502);
            }

            $ehlo = aram_smtp_cmd($handle, 'EHLO ' . $hostname, [250], 'EHLO (TLS)');
        }

        if ($config['user'] !== '') {
            $authPlain = stripos($ehlo, 'AUTH') !== false && stripos($ehlo, 'PLAIN') !== false;

            if ($authPlain) {
                $token = base64_encode("\0" . $config['user'] . "\0" . $config['pass']);
                aram_smtp_cmd($handle, 'AUTH PLAIN ' . $token, [235], 'authentication');
            } else {
                aram_smtp_cmd($handle, 'AUTH LOGIN', [334], 'AUTH LOGIN');
                aram_smtp_cmd($handle, base64_encode($config['user']), [334], 'username');
                aram_smtp_cmd($handle, base64_encode($config['pass']), [235], 'password');
            }
        }

        aram_smtp_cmd($handle, 'MAIL FROM:<' . $config['from'] . '>', [250], 'MAIL FROM');
        aram_smtp_cmd($handle, 'RCPT TO:<' . $recipient . '>', [250, 251], 'RCPT TO');
        aram_smtp_cmd($handle, 'DATA', [354], 'DATA');

        $payload = '';
        foreach ($headers as $name => $value) {
            $payload .= $name . ': ' . $value . "\r\n";
        }
        $payload .= "\r\n" . $body;

        // RFC 5321 dot-stuffing.
        $payload = preg_replace('/^\./m', '..', $payload);

        fwrite($handle, $payload . "\r\n.\r\n");
        aram_smtp_expect($handle, [250], 'message body');

        // The message is accepted at this point; a failed QUIT is not fatal.
        try {
            aram_smtp_cmd($handle, 'QUIT', [221], 'QUIT');
        } catch (AramError $ignored) {
            // Ignore.
        }
    } finally {
        fclose($handle);
    }
}

/* -------------------------------------------------------------------------
 * Request handling
 * ---------------------------------------------------------------------- */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
header('Referrer-Policy: no-referrer');

try {
    if (!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Allow: POST');
        aram_respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
    }

    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') {
        throw new AramError('No data was submitted.', 400);
    }
    if (strlen($raw) > 25000) {
        throw new AramError('The submitted brief is too large.', 413);
    }

    $input = json_decode($raw, true);
    if (!is_array($input)) {
        throw new AramError('The submitted brief could not be read.', 400);
    }

    // Throttle before doing any work.
    aram_rate_limit();

    // ---- Validate -------------------------------------------------------
    $fields = [];

    $name    = aram_clean_line((string) ($input['name'] ?? ''), 120);
    $email   = aram_clean_line((string) ($input['email'] ?? ''), 200);
    $company = aram_clean_line((string) ($input['company'] ?? ''), 160);
    $message = aram_clean_block((string) ($input['message'] ?? ''), 5000);

    $typesRaw = $input['types'] ?? [];
    $types    = [];
    if (is_array($typesRaw)) {
        foreach (array_slice($typesRaw, 0, 10) as $type) {
            if (!is_string($type)) {
                continue;
            }
            $clean = aram_clean_line($type, 80);
            if ($clean !== '') {
                $types[] = $clean;
            }
        }
    }

    if (aram_strlen($name) < 2) {
        $fields['name'] = 'Please enter your full name.';
    }
    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $fields['email'] = 'Please enter a valid work email address.';
    }
    if (count($types) === 0) {
        $fields['selectedTypes'] = 'Please select at least one area you need help with.';
    }
    if (aram_strlen($message) < 8) {
        $fields['message'] = 'Please provide a little more context (at least 8 characters).';
    }

    if (!empty($fields)) {
        throw new AramError('Please correct the highlighted fields and try again.', 422, $fields);
    }

    // ---- Build the email ------------------------------------------------
    $received = date('d M Y, H:i T');
    $typesText = implode(', ', $types);

    $text = "New Project Enquiry\r\n"
        . "===================\r\n\r\n"
        . "A new project enquiry has been submitted through the Aram Analytics website.\r\n\r\n"
        . "Contact Details\r\n"
        . "---------------\r\n"
        . 'Name:    ' . $name . "\r\n"
        . 'Email:   ' . $email . "\r\n"
        . 'Company: ' . ($company !== '' ? $company : 'Not provided') . "\r\n\r\n"
        . "Project Details\r\n"
        . "---------------\r\n"
        . 'Project Type: ' . $typesText . "\r\n"
        . "Description:\r\n" . $message . "\r\n\r\n"
        . 'Received: ' . $received . "\r\n";

    $html = '<div style="background:#f6f6f9;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;">'
        . '<div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e7e7ef;border-radius:14px;overflow:hidden;">'
        . '<div style="background:#6C5CE7;padding:20px 26px;">'
        . '<div style="color:#ffffff;font-size:18px;font-weight:700;">New Project Enquiry</div>'
        . '<div style="color:#e6e2ff;font-size:13px;margin-top:4px;">Submitted via aramanalytics.com</div>'
        . '</div>'
        . '<div style="padding:24px 26px;color:#111827;">'
        . '<p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:#374151;">'
        . 'A new project enquiry has been submitted through the Aram Analytics website.</p>'
        . '<h3 style="margin:0 0 8px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;">Contact Details</h3>'
        . '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">'
        . '<tr><td style="padding:4px 14px 4px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap;">Name</td>'
        . '<td style="padding:4px 0;color:#111827;font-size:14px;font-weight:600;">' . aram_escape($name) . '</td></tr>'
        . '<tr><td style="padding:4px 14px 4px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap;">Email</td>'
        . '<td style="padding:4px 0;color:#111827;font-size:14px;font-weight:600;">' . aram_escape($email) . '</td></tr>'
        . '<tr><td style="padding:4px 14px 4px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap;">Company</td>'
        . '<td style="padding:4px 0;color:#111827;font-size:14px;font-weight:600;">'
        . aram_escape($company !== '' ? $company : 'Not provided') . '</td></tr>'
        . '</table>'
        . '<h3 style="margin:24px 0 8px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;">Project Details</h3>'
        . '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">'
        . '<tr><td style="padding:4px 14px 4px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap;">Project Type</td>'
        . '<td style="padding:4px 0;color:#111827;font-size:14px;font-weight:600;">' . aram_escape($typesText) . '</td></tr>'
        . '</table>'
        . '<div style="margin-top:8px;padding:14px 16px;background:#f9f9fc;border-left:3px solid #6C5CE7;border-radius:6px;'
        . 'color:#1f2937;font-size:14px;line-height:1.6;white-space:pre-wrap;">' . aram_escape($message) . '</div>'
        . '<p style="margin:22px 0 0;font-size:13px;color:#6b7280;">Received: ' . aram_escape($received) . '</p>'
        . '</div></div></div>';

    $boundary = 'aram_' . bin2hex(random_bytes(16));

    $body = '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . aram_base64_body($text) . "\r\n\r\n"
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . aram_base64_body($html) . "\r\n\r\n"
        . '--' . $boundary . "--";

    $headers = [
        'Date'         => date('r'),
        'From'         => aram_mime_encode($ARAM_CONFIG['fromName']) . ' <' . $ARAM_CONFIG['from'] . '>',
        'To'           => '<' . $ARAM_CONFIG['to'] . '>',
        'Reply-To'     => '<' . $email . '>',
        'Subject'      => aram_mime_encode('New Project Enquiry - Aram Analytics'),
        'MIME-Version' => '1.0',
        'Content-Type' => 'multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer'     => 'Aram Analytics Enquiry Endpoint',
    ];

    aram_smtp_send($ARAM_CONFIG, $headers, $body, $ARAM_CONFIG['to']);

    aram_respond(200, ['ok' => true, 'message' => 'Your brief has been delivered.']);
} catch (AramError $error) {
    $payload = ['ok' => false, 'error' => $error->getMessage()];
    if (!empty($error->fields)) {
        $payload['fields'] = $error->fields;
    }

    // Delivery / server issues are logged server-side but never exposed.
    if ($error->status >= 500) {
        error_log('[aram-enquiry] ' . $error->getMessage());
    }

    aram_respond($error->status, $payload);
} catch (Throwable $error) {
    error_log('[aram-enquiry] unexpected: ' . $error->getMessage());
    aram_respond(500, [
        'ok'    => false,
        'error' => 'We could not send your brief right now. Please try again shortly.',
    ]);
}
