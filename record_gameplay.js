import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8089;
const DIST_DIR = path.join(__dirname, 'dist');

// 1. Simple static file server for dist/
function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
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
        res.end('Error loading file');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function run() {
  const server = await startServer();

  console.log('Launching browser (Edge)...');
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
  console.log(`Navigating to http://localhost:${PORT}...`);
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

  // Wait for canvas
  await page.waitForSelector('canvas');
  console.log('Canvas loaded. Setting up MediaRecorder in page...');

  // Inject recorder
  await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    const stream = canvas.captureStream(30);

    let mimeType = 'video/webm;codecs=vp9';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      mimeType = 'video/webm';
    }

    const recorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 6000000
    });

    window.__mediaRecorder = recorder;
    window.__recordedChunks = [];
    window.__recordingDone = false;

    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) window.__recordedChunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(window.__recordedChunks, { type: mimeType });
      const reader = new FileReader();
      reader.onloadend = () => {
        window.__recordedVideoBase64 = reader.result.split(',')[1];
        window.__recordingDone = true;
      };
      reader.readAsDataURL(blob);
    };

    recorder.start(100);
  });

  console.log('Recording started! Simulating gameplay...');

  // Phase 1: Wait 1.5s on Title Screen to show title billboard & sky
  await new Promise(r => setTimeout(r, 1500));

  // Phase 2: Start Game with first flap!
  console.log('Taking off!');
  await page.keyboard.press('Space');
  await new Promise(r => setTimeout(r, 450));

  // Phase 3: Smart autopilot loop through pipes
  const startTime = Date.now();
  const maxFlightDuration = 9000; // 9 seconds

  while (Date.now() - startTime < maxFlightDuration) {
    const shouldFlap = await page.evaluate(() => {
      const game = window.gameInstance;
      if (!game || game.state !== 'PLAYING') return false;

      // Find the next upcoming pipe
      const playerZ = game.playerRig.position.z;
      const playerY = game.playerRig.position.y;
      const vy = game.velocityY;

      // Filter pipes ahead of player
      const aheadPipes = game.pipeManager.pipes
        .filter(p => p.group.position.z < playerZ + 2)
        .sort((a, b) => b.group.position.z - a.group.position.z);

      const nextPipe = aheadPipes[0];
      const targetY = nextPipe ? nextPipe.gapY : 5.0;

      // Flap if falling below target gap height
      if (playerY < targetY - 0.25 || (playerY < targetY + 0.3 && vy < -2.2)) {
        return true;
      }
      return false;
    });

    if (shouldFlap) {
      await page.keyboard.press('Space');
    }

    await new Promise(r => setTimeout(r, 70));
  }

  // Phase 4: Intentionally drop to demonstrate collision / SPLAT screen
  console.log('Demonstrating collision & Game Over screen...');
  await new Promise(r => setTimeout(r, 1800));

  // Phase 5: Flap to retry
  console.log('Retrying...');
  await page.keyboard.press('Space');
  await new Promise(r => setTimeout(r, 1200));

  // Stop recording
  console.log('Stopping recorder...');
  await page.evaluate(() => {
    window.__mediaRecorder.stop();
  });

  // Wait for base64 conversion
  await page.waitForFunction(() => window.__recordingDone === true, { timeout: 10000 });

  const base64Data = await page.evaluate(() => window.__recordedVideoBase64);
  console.log(`Video recorded! Data size: ${Math.round(base64Data.length / 1024)} KB`);

  const webmPath = path.join(__dirname, 'gameplay.webm');
  fs.writeFileSync(webmPath, Buffer.from(base64Data, 'base64'));
  console.log(`Saved WebM to ${webmPath}`);

  await browser.close();
  server.close();

  // Convert with ffmpeg
  const mp4Path = path.join(__dirname, 'gameplay.mp4');
  const gifPath = path.join(__dirname, 'gameplay.gif');

  console.log('Converting WebM to MP4 with ffmpeg...');
  execSync(`ffmpeg -y -i "${webmPath}" -c:v libx264 -pix_fmt yuv420p -r 30 "${mp4Path}"`, { stdio: 'inherit' });

  console.log('Generating high-quality animated GIF with ffmpeg...');
  execSync(`ffmpeg -y -i "${mp4Path}" -vf "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" "${gifPath}"`, { stdio: 'inherit' });

  console.log('SUCCESS! Video files generated:');
  console.log(`- MP4: ${mp4Path}`);
  console.log(`- GIF: ${gifPath}`);
}

run().catch(err => {
  console.error('Recording error:', err);
  process.exit(1);
});
