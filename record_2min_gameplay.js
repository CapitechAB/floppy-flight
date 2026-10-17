import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8096;
const DIST_DIR = path.join(__dirname, 'dist');
const FFMPEG_PATH = 'C:\\Users\\buhre\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.2-full_build\\bin\\ffmpeg.exe';

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
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

// Convert any audio to raw 16-bit 44.1kHz stereo PCM
function extractPcm(filePath) {
  const tempPcm = path.join(__dirname, `temp_${Date.now()}_${Math.random().toString(36).slice(2)}.pcm`);
  try {
    execSync(`"${FFMPEG_PATH}" -y -i "${filePath}" -ar 44100 -ac 2 -f s16le "${tempPcm}"`, { stdio: 'pipe' });
    const buf = fs.readFileSync(tempPcm);
    fs.unlinkSync(tempPcm);
    return buf;
  } catch (e) {
    if (fs.existsSync(tempPcm)) fs.unlinkSync(tempPcm);
    throw e;
  }
}

function createWavFile(masterL, masterR, outPath) {
  const sampleRate = 44100;
  const numChannels = 2;
  const bytesPerSample = 2;
  const numSamples = masterL.length;
  const dataSize = numSamples * numChannels * bytesPerSample;

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(dataSize + 36, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  header.writeUInt16LE(1, 20);  // AudioFormat (1 for PCM)
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28); // ByteRate
  header.writeUInt16LE(numChannels * bytesPerSample, 32); // BlockAlign
  header.writeUInt16LE(16, 34); // BitsPerSample
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  const outBuf = Buffer.alloc(dataSize);
  for (let i = 0; i < numSamples; i++) {
    const l = Math.max(-1.0, Math.min(1.0, masterL[i]));
    const r = Math.max(-1.0, Math.min(1.0, masterR[i]));
    outBuf.writeInt16LE(Math.round(l * 32767), i * 4 + 0);
    outBuf.writeInt16LE(Math.round(r * 32767), i * 4 + 2);
  }

  fs.writeFileSync(outPath, Buffer.concat([header, outBuf]));
}

async function recordGame() {
  const server = await startServer();

  console.log('Launching Edge for 2-Minute Gameplay Flight...');
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
  await new Promise(r => setTimeout(r, 1200));

  console.log('Setting up 2-minute in-page recorder and championship autopilot...');
  await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    const stream = canvas.captureStream(30);

    let mimeType = 'video/webm;codecs=vp9';
    if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'video/webm';

    const recorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 6500000
    });

    window.__mediaRecorder = recorder;
    window.__recordedChunks = [];
    window.__recordingDone = false;
    window.__audioEvents = [];

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

    const game = window.gameInstance;

    // Track audio events with precise timestamps relative to recording start
    window.__flightStart = performance.now();

    const origFlap = game.handleFlapInput.bind(game);
    game.handleFlapInput = (side) => {
      window.__audioEvents.push({
        type: 'flap',
        timeMs: performance.now() - window.__flightStart
      });
      return origFlap(side);
    };

    // Track scoring
    let prevScore = 0;
    setInterval(() => {
      if (game.score > prevScore) {
        prevScore = game.score;
        window.__audioEvents.push({
          type: 'score',
          score: game.score,
          timeMs: performance.now() - window.__flightStart
        });
      }
    }, 16);

    // Start game
    game.startGame();

    // High-performance predictive flight autopilot
    let running = true;
    const ticker = () => {
      if (!running) return;
      if (game.state === 'PLAYING') {
        const playerZ = game.playerRig.position.z;
        const playerY = game.playerRig.position.y;
        const vy = game.velocityY;

        // Pipe clearance boundary: player has passed pipe when playerZ <= pipeZ - 1.5
        const upcoming = game.pipeManager.pipes
          .filter(p => p.group.position.z < playerZ + 1.5)
          .sort((a, b) => b.group.position.z - a.group.position.z);

        const targetPipe = upcoming[0];
        if (targetPipe) {
          const targetY = targetPipe.gapY;
          const distZ = Math.max(0.01, playerZ - targetPipe.group.position.z);

          // Proportional anticipatory flap logic
          if (playerY < targetY + 1.05) {
            if (playerY < targetY - 0.28 || (distZ < 9.0 && playerY < targetY + 0.15 && vy < -1.8)) {
              game.handleFlapInput('both');
            }
          }
        }
      }
      requestAnimationFrame(ticker);
    };
    requestAnimationFrame(ticker);
    window.__stopAutopilot = () => { running = false; };
  });

  console.log('Recording in progress for 120 seconds (2 minutes)...');
  const totalDurationMs = 120000;
  const reportIntervalMs = 15000;
  let elapsed = 0;

  while (elapsed < totalDurationMs) {
    await new Promise(r => setTimeout(r, reportIntervalMs));
    elapsed += reportIntervalMs;
    const status = await page.evaluate(() => {
      const g = window.gameInstance;
      return {
        score: g ? g.score : 0,
        distanceMeters: g ? Math.round(Math.abs(g.playerRig.position.z)) : 0,
        speed: g ? g.forwardSpeed.toFixed(1) : 0
      };
    });
    console.log(`[${Math.round(elapsed / 1000)}s / 120s] Score: ${status.score} | Distance: ${status.distanceMeters}m | Speed: ${status.speed} m/s`);
  }

  console.log('2 minutes elapsed! Stopping recorder and collecting video chunks...');
  await page.evaluate(() => {
    if (window.__stopAutopilot) window.__stopAutopilot();
    window.__mediaRecorder.stop();
  });

  await page.waitForFunction(() => window.__recordingDone === true, { timeout: 30000 });

  const { base64Data, audioEvents, finalScore, finalDistance } = await page.evaluate(() => ({
    base64Data: window.__recordedVideoBase64,
    audioEvents: window.__audioEvents,
    finalScore: window.gameInstance ? window.gameInstance.score : 0,
    finalDistance: window.gameInstance ? Math.round(Math.abs(window.gameInstance.playerRig.position.z)) : 0
  }));

  console.log(`Video recorded! Captured ${audioEvents.length} audio events. Final Score: ${finalScore}, Distance: ${finalDistance}m.`);
  const webmPath = path.join(__dirname, 'gameplay_2min.webm');
  fs.writeFileSync(webmPath, Buffer.from(base64Data, 'base64'));

  await browser.close();
  server.close();

  // ----------------------------------------------------
  // Audio Synthesis & Studio Mixing
  // ----------------------------------------------------
  console.log('Synthesizing 2-minute studio-grade audio track...');
  const sampleRate = 44100;
  const durationSec = 121; // 121 seconds
  const totalSamples = durationSec * sampleRate;
  const masterL = new Float32Array(totalSamples);
  const masterR = new Float32Array(totalSamples);

  // 1. Load sound assets into PCM buffers
  const bgmPcm = extractPcm(path.join(__dirname, 'src', 'assets', 'bgm.mp3'));
  const flapPcms = [
    extractPcm(path.join(__dirname, 'src', 'assets', 'sfx', 'flap_1.mp3')),
    extractPcm(path.join(__dirname, 'src', 'assets', 'sfx', 'flap_2.mp3')),
    extractPcm(path.join(__dirname, 'src', 'assets', 'sfx', 'flap_3.mp3'))
  ];

  // Generate synthetic ring chime (G5 -> C6 glockenspiel bell)
  function createChimePcm() {
    const durSec = 0.45;
    const numSamples = Math.round(durSec * sampleRate);
    const buf = Buffer.alloc(numSamples * 4);
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const env = Math.exp(-t * 9.0);
      const s1 = Math.sin(2 * Math.PI * 784 * t) * 0.4;
      const s2 = t > 0.07 ? Math.sin(2 * Math.PI * 1046.5 * (t - 0.07)) * 0.55 * Math.exp(-(t - 0.07) * 7.0) : 0;
      const sample = Math.round((s1 + s2) * env * 32767);
      buf.writeInt16LE(Math.max(-32767, Math.min(32767, sample)), i * 4 + 0);
      buf.writeInt16LE(Math.max(-32767, Math.min(32767, sample)), i * 4 + 2);
    }
    return buf;
  }
  const chimePcm = createChimePcm();

  // Helper to mix PCM at sample offset
  function mixBuffer(pcm, startSample, volume = 1.0) {
    const num = pcm.length / 4;
    for (let i = 0; i < num; i++) {
      const idx = startSample + i;
      if (idx >= totalSamples) break;
      const l = pcm.readInt16LE(i * 4 + 0) / 32768.0;
      const r = pcm.readInt16LE(i * 4 + 2) / 32768.0;
      masterL[idx] += l * volume;
      masterR[idx] += r * volume;
    }
  }

  // Helper to mark voice ducking
  const ducking = new Float32Array(totalSamples);
  ducking.fill(1.0); // 1.0 = normal volume

  function applyDucking(startSample, durationSamples, duckVolume = 0.45) {
    const fade = Math.round(0.08 * sampleRate);
    for (let i = 0; i < durationSamples; i++) {
      const idx = startSample + i;
      if (idx >= totalSamples) break;
      let factor = duckVolume;
      if (i < fade) {
        factor = 1.0 - (1.0 - duckVolume) * (i / fade);
      } else if (i > durationSamples - fade) {
        factor = duckVolume + (1.0 - duckVolume) * ((i - (durationSamples - fade)) / fade);
      }
      ducking[idx] = Math.min(ducking[idx], factor);
    }
  }

  // 2. Mix Voice and SFX events first
  let flapIndex = 0;
  for (const ev of audioEvents) {
    const startSample = Math.round((ev.timeMs / 1000) * sampleRate);
    if (startSample >= totalSamples) continue;

    if (ev.type === 'flap') {
      const pcm = flapPcms[flapIndex % flapPcms.length];
      flapIndex++;
      mixBuffer(pcm, startSample, 0.85);
    } else if (ev.type === 'score') {
      // Ring chime
      mixBuffer(chimePcm, startSample, 0.75);
    }
  }

  // 3. Mix looped BGM cleanly
  const bgmSamples = bgmPcm.length / 4;
  for (let i = 0; i < totalSamples; i++) {
    const bgmIdx = i % bgmSamples;
    const l = (bgmPcm.readInt16LE(bgmIdx * 4 + 0) / 32768.0) * 0.36;
    const r = (bgmPcm.readInt16LE(bgmIdx * 4 + 2) / 32768.0) * 0.36;
    masterL[i] += l;
    masterR[i] += r;
  }

  const wavPath = path.join(__dirname, 'gameplay_2min_audio.wav');
  createWavFile(masterL, masterR, wavPath);
  console.log(`Audio rendered to ${wavPath}`);

  // ----------------------------------------------------
  // Final MP4 Encoding with FFmpeg
  // ----------------------------------------------------
  const mp4Path = path.join(__dirname, 'gameplay_2min.mp4');
  console.log('Encoding final 2-minute MP4 with H.264 video and AAC audio...');
  execSync(`"${FFMPEG_PATH}" -y -i "${webmPath}" -i "${wavPath}" -map 0:v -map 1:a -c:v libx264 -preset fast -crf 22 -pix_fmt yuv420p -r 30 -c:a aac -b:a 192k -shortest "${mp4Path}"`, { stdio: 'inherit' });

  // Generate 15-second animated GIF preview of highlights
  const gifPath = path.join(__dirname, 'gameplay_2min_preview.gif');
  console.log('Generating 15-second showcase GIF preview...');
  execSync(`"${FFMPEG_PATH}" -y -ss 00:00:20 -t 15 -i "${mp4Path}" -vf "fps=14,scale=560:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" "${gifPath}"`, { stdio: 'inherit' });

  console.log('SUCCESS! Generated 2-Minute Gameplay Artifacts:');
  console.log(`- MP4: ${mp4Path}`);
  console.log(`- GIF: ${gifPath}`);

  // Cleanup intermediate wav/webm if needed
  if (fs.existsSync(wavPath)) fs.unlinkSync(wavPath);
}

recordGame().catch(err => {
  console.error('Fatal recording error:', err);
  process.exit(1);
});
