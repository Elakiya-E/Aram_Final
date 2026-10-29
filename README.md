# Aram Analytics website

A responsive Next.js App Router landing page with an editable content module, reduced-motion-aware animations, and a three-step Project Brief form that delivers enquiries by email.

## Run locally

```bash
npm install
npm run dev
```

## Before publishing

- Set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` to the inbox shown by the "contact" call-to-action links elsewhere on the site. This value is public and is only used for `mailto:` links.
- Configure the Project Brief form delivery (see below). Without it the form reports an error instead of a false success.
- Replace the illustrative project concepts in `content/site.ts` with approved case studies. The current cards are explicitly labeled as concepts and make no client or performance claims.
- Review the service descriptions and Zoho partner/reselling language in `content/site.ts` and `app/page.tsx` to confirm they accurately describe the business.
- Add approved contact, company, and legal details to the footer and metadata before launch.

## Project Brief email delivery

The site is a static export (`output: "export"`) hosted on Hostinger, so there is no Node.js
server. The form posts to [public/api/send-enquiry.php](public/api/send-enquiry.php), which runs
on Hostinger's PHP runtime and sends the enquiry over authenticated SMTP.

The endpoint:

- validates and sanitises every field, and rate limits submissions per network address
- escapes all visitor input before it is inserted into the HTML email
- keeps the recipient fixed to `ENQUIRY_TO_EMAIL` and uses the visitor's email only as `Reply-To`
- sends a `multipart/alternative` message (plain text + HTML)

### Configuration

Copy `.env.example` to `.env` and fill in the email settings, then place that file on the server
as `public/api/.env` (it is excluded from Git and blocked from public access). Alternatively set
the same values as environment variables on the host.

```env
ENQUIRY_TO_EMAIL=aramanalytics2025@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=ssl
SMTP_USER=aramanalytics2025@gmail.com
SMTP_PASS=your_google_app_password
```

For Gmail, enable 2-Step Verification and generate a 16-character **App Password** to use as
`SMTP_PASS`. Never commit these values, and never expose them with a `NEXT_PUBLIC_` prefix.

### Testing the endpoint

`next dev` serves the PHP file as plain text, so send a request directly with PHP installed:

```bash
php -S localhost:8080 -t public
curl -X POST http://localhost:8080/api/send-enquiry.php \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"you@example.com\",\"company\":\"\",\"types\":[\"AI solutions\"],\"message\":\"Testing the enquiry endpoint.\"}"
```

After deploying, submit a real enquiry and confirm it arrives at `ENQUIRY_TO_EMAIL`
(check spam/junk on the first few sends).

## Checks

```bash
npm run typecheck
npm run build
```
