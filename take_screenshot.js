import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8092;
const DIST_DIR = path.join(__dirname, 'dist');

function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.png': 'image/png'
  };

  const server = http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function capture() {
  const server = await startServer();

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: [
      '--use-gl=angle',
      '--use-angle=d3d11',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1280,720',
      '--autoplay-policy=no-user-gesture-required'
    ],
    defaultViewport: { width: 1280, height: 720 }
  });

  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('canvas');

  // Wait 1.0s for initial render
  await new Promise(r => setTimeout(r, 1000));

  // Click canvas to dismiss ready card and begin flight!
  await page.click('canvas');
  await new Promise(r => setTimeout(r, 250));

  const screenshotPath = path.join(__dirname, 'floppy_flight_screenshot.png');
  await page.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved to ${screenshotPath}`);

  await browser.close();
  server.close();
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
