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
const FFMPEG_PATH = 'C:\\Users\\buhre\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.2-full_build\\bin\\ffmpeg.exe';

// 1. Static file server for dist/
function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav'
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
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded' });

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

  // Phase 1: Wait 1.5s on Title Screen
  await new Promise(r => setTimeout(r, 1500));

  // Phase 2: Start Game with first flap!
  console.log('Taking off!');
  await page.keyboard.press('Space');
  await new Promise(r => setTimeout(r, 450));

  // Phase 3: Smart autopilot loop through pipes
  const startTime = Date.now();
  const maxFlightDuration = 8500; // ~8.5 seconds flight

  while (Date.now() - startTime < maxFlightDuration) {
    const shouldFlap = await page.evaluate(() => {
      const game = window.gameInstance;
      if (!game || game.state !== 'PLAYING') return false;

      // Find the next upcoming pipe
      const playerZ = game.playerRig.position.z;
      const playerY = game.playerRig.position.y;
      const vy = game.velocityY;

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

  // Phase 4: Intentionally drop into pipe / ground to demonstrate BONK & Game Over sound
  console.log('Demonstrating collision & Game Over screen...');
  await new Promise(r => setTimeout(r, 2200));

  // Phase 5: Flap to retry
  console.log('Retrying...');
  await page.keyboard.press('Space');
  await new Promise(r => setTimeout(r, 1000));

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

  const bgmPath = path.join(__dirname, 'src', 'assets', 'bgm.mp3');
  const vFight = path.join(__dirname, 'src', 'assets', 'voice', 'voice_fight.mp3');
  const v1 = path.join(__dirname, 'src', 'assets', 'voice', 'voice_1.mp3');
  const v2 = path.join(__dirname, 'src', 'assets', 'voice', 'voice_2.mp3');
  const v3 = path.join(__dirname, 'src', 'assets', 'voice', 'voice_3.mp3');
  const f1 = path.join(__dirname, 'src', 'assets', 'sfx', 'flap_1.mp3');
  const f2 = path.join(__dirname, 'src', 'assets', 'sfx', 'flap_2.mp3');
  const bonk = path.join(__dirname, 'src', 'assets', 'sfx', 'bonk.mp3');
  const gameover = path.join(__dirname, 'src', 'assets', 'sfx', 'gameover.mp3');
  const vFatality = path.join(__dirname, 'src', 'assets', 'voice', 'voice_fatality.mp3');

  console.log('Converting WebM to MP4 with BGM, Flaps, Happy Little Girl Voice Announcer (Fight, 1, 2, 3, Uh ooh!), Bonk, and Sad Trombone...');

  // Audio filter mixing:
  // [1:a] BGM volume 0.30
  // [2:a] Fight! at 1500ms
  // [3:a] voice 1 at 4200ms
  // [4:a] voice 2 at 6800ms
  // [5:a] voice 3 at 9200ms
  // [6:a] flap 1 at 1500ms
  // [7:a] flap 2 at 1950ms
  // [8:a] bonk at 10800ms
  // [9:a] gameover sad trombone at 11050ms
  // [10:a] Fatality! at 12200ms
  const filterComplex = `[1:a]volume=0.30[bgm];` +
    `[2:a]adelay=1500|1500,volume=1.35[vf];` +
    `[3:a]adelay=4200|4200,volume=1.35[v1];` +
    `[4:a]adelay=6800|6800,volume=1.35[v2];` +
    `[5:a]adelay=9200|9200,volume=1.35[v3];` +
    `[6:a]adelay=1500|1500,volume=0.90[f1];` +
    `[7:a]adelay=1950|1950,volume=0.90[f2];` +
    `[8:a]adelay=10800|10800,volume=1.4[bnk];` +
    `[9:a]adelay=11050|11050,volume=1.15[gov];` +
    `[10:a]adelay=12200|12200,volume=1.45[vfat];` +
    `[bgm][vf][v1][v2][v3][f1][f2][bnk][gov][vfat]amix=inputs=10:duration=first:dropout_transition=2[aout]`;

  execSync(`"${FFMPEG_PATH}" -y -i "${webmPath}" -i "${bgmPath}" -i "${vFight}" -i "${v1}" -i "${v2}" -i "${v3}" -i "${f1}" -i "${f2}" -i "${bonk}" -i "${gameover}" -i "${vFatality}" -filter_complex "${filterComplex}" -map 0:v -map "[aout]" -c:v libx264 -pix_fmt yuv420p -r 30 -c:a aac -b:a 192k -shortest "${mp4Path}"`, { stdio: 'inherit' });

  console.log('Generating high-quality animated GIF with ffmpeg...');
  execSync(`"${FFMPEG_PATH}" -y -i "${mp4Path}" -vf "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" "${gifPath}"`, { stdio: 'inherit' });

  console.log('SUCCESS! Video files generated:');
  console.log(`- MP4: ${mp4Path}`);
  console.log(`- GIF: ${gifPath}`);
}

run().catch(err => {
  console.error('Recording error:', err);
  process.exit(1);
});
