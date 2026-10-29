const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const distDir = path.join(rootDir, 'dist');
const zipPath = path.join(rootDir, 'hostinger-deploy.zip');

console.log('--- Preparing Hostinger Deployment Package ---');

if (!fs.existsSync(outDir)) {
  console.error('Error: "out" directory not found. Please run "next build" with output: "export" first.');
  process.exit(1);
}

// 1. Copy out/ to dist/ so both folders are identical static distributions
console.log('Copying static export files into "dist"...');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.cpSync(outDir, distDir, { recursive: true });

// Ensure .htaccess exists in dist as well
const htaccessSource = path.join(outDir, '.htaccess');
const htaccessDest = path.join(distDir, '.htaccess');
if (fs.existsSync(htaccessSource) && !fs.existsSync(htaccessDest)) {
  fs.copyFileSync(htaccessSource, htaccessDest);
}

console.log('✓ Successfully populated "dist" with static Hostinger files.');

// 2. Create hostinger-deploy.zip using PowerShell Compress-Archive
console.log('Creating hostinger-deploy.zip for 1-click Hostinger File Manager upload...');
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

try {
  // Compress contents of out/ (including .htaccess)
  const psCmd = `powershell -NoProfile -Command "Get-ChildItem -Force -Path '${outDir}\\*' | Compress-Archive -DestinationPath '${zipPath}' -Force"`;
  execSync(psCmd, { stdio: 'inherit' });
  const stats = fs.statSync(zipPath);
  console.log(`✓ Generated "hostinger-deploy.zip" (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
} catch (err) {
  console.warn('Could not automatically create zip, but out/ and dist/ are ready:', err.message);
}

console.log('--- Hostinger Package Ready! ---');
