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
const ARTIFACT_DIR = 'C:\\Users\\buhre\\.gemini\\antigravity\\brain\\47c87d7b-c797-4540-9a3d-af5cae8dccc8';

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

// Convert audio to raw 16-bit 44.1kHz stereo PCM
function extractPcm(filePath) {
  const tempPcm = path.join(__dirname, `temp_${Date.now()}_${Math.random().toString(36).slice(2)}.pcm`);
  try {
    execSync(`"${FFMPEG_PATH}" -y -i "${filePath}" -ar 44100 -ac 2 -f s16le "${tempPcm}"`, { stdio: 'pipe' });
    const buf = fs.readFileSync(tempPcm);
    fs.unlinkSync(tempPcm);
    return buf;
  } catch (err) {
    console.error(`Failed to extract PCM for ${filePath}:`, err.message);
    if (fs.existsSync(tempPcm)) fs.unlinkSync(tempPcm);
    return Buffer.alloc(0);
  }
}

// Write standard 16-bit stereo WAV
function writeWavFile(filePath, leftChannel, rightChannel, sampleRate = 44100) {
  const numSamples = leftChannel.length;
  const byteRate = sampleRate * 2 * 2;
  const blockAlign = 4;
  const dataSize = numSamples * 4;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM format
  header.writeUInt16LE(2, 22); // Stereo
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(16, 34); // 16-bit
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  const data = Buffer.alloc(dataSize);
  for (let i = 0; i < numSamples; i++) {
    const lClamped = Math.max(-1.0, Math.min(1.0, leftChannel[i]));
    const rClamped = Math.max(-1.0, Math.min(1.0, rightChannel[i]));
    const l16 = lClamped < 0 ? Math.round(lClamped * 32768) : Math.round(lClamped * 32767);
    const r16 = rClamped < 0 ? Math.round(rClamped * 32768) : Math.round(rClamped * 32767);
    data.writeInt16LE(l16, i * 4);
    data.writeInt16LE(r16, i * 4 + 2);
  }

  fs.writeFileSync(filePath, Buffer.concat([header, data]));
}

async function record10sGameplay() {
  const server = await startServer();
  console.log('Launching browser for 10-second gameplay recording...');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: [
      '--use-gl=angle',
      '--use-angle=d3d11',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--no-sandbox',
      '--autoplay-policy=no-user-gesture-required'
    ],
    defaultViewport: { width: 1280, height: 720 }
  });

  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('canvas');
  await new Promise(r => setTimeout(r, 1200));

  await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    const stream = canvas.captureStream(30);
    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9'
      : 'video/webm';

    const recorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 6000000
    });

    window.__mediaRecorder = recorder;
    window.__recordedChunks = [];
    window.__recordingDone = false;
    window.__audioEvents = [];
    window.__flightStart = 0;

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
    window.__flightStart = performance.now();

    // Configure pipe spacing & speed for showcase in 10s recording
    game.pipeManager.spacingZ = 13.5;
    game.forwardSpeed = 16.0;
    game.baseForwardSpeed = 16.0;
    game.pipesPerLevel = 10;

    // Start at pipe 9 so Level 1 clears quickly, showcasing victory screen and Level 2 Jungle
    game.score = 9;
    game.levelPipesCleared = 9;
    game.ui.updateScore(9);

    // Hook flap input to log wing flap whooshes
    const origFlap = game.handleFlapInput.bind(game);
    game.handleFlapInput = (side) => {
      window.__audioEvents.push({
        type: 'flap',
        timeMs: performance.now() - window.__flightStart
      });
      return origFlap(side);
    };

    // Track score for chime sound
    let prevScore = 9;
    let fanfareLogged = false;
    setInterval(() => {
      if (game.score > prevScore) {
        prevScore = game.score;
        window.__audioEvents.push({
          type: 'score',
          score: game.score,
          timeMs: performance.now() - window.__flightStart
        });
      }
      if (game.state === 'LEVEL_CLEARED' && !fanfareLogged) {
        fanfareLogged = true;
        window.__audioEvents.push({
          type: 'fanfare',
          timeMs: performance.now() - window.__flightStart
        });

        // Click NEXT LEVEL after 1.8 seconds of displaying victory screen
        setTimeout(() => {
          if (game.state === 'LEVEL_CLEARED') {
            window.__audioEvents.push({
              type: 'nextLevel',
              timeMs: performance.now() - window.__flightStart
            });
            game.nextLevel();
            // Re-apply showcase speed & spacing for Level 2 Jungle
            game.pipeManager.spacingZ = 14.0;
            game.forwardSpeed = 16.0;
            game.baseForwardSpeed = 16.0;
          }
        }, 1800);
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

        // Passed pipe boundary: playerZ <= pipeZ - 1.5
        const upcoming = game.pipeManager.pipes
          .filter(p => p.group.position.z < playerZ + 1.5)
          .sort((a, b) => b.group.position.z - a.group.position.z);

        const targetPipe = upcoming[0];
        if (targetPipe) {
          const targetY = targetPipe.gapY;
          const distZ = Math.max(0.01, playerZ - targetPipe.group.position.z);

          // Only flap if below the ceiling limit of this gap
          if (playerY < targetY + 1.0) {
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

  const durationSec = 10;
  console.log(`Recording 10 seconds of gameplay...`);
  await new Promise(r => setTimeout(r, durationSec * 1000));

  console.log('10 seconds elapsed. Stopping recorder...');
  await page.evaluate(() => {
    if (window.__stopAutopilot) window.__stopAutopilot();
    window.__mediaRecorder.stop();
  });

  await page.waitForFunction(() => window.__recordingDone === true, { timeout: 15000 });

  const { base64Data, audioEvents, finalScore, finalDistance } = await page.evaluate(() => ({
    base64Data: window.__recordedVideoBase64,
    audioEvents: window.__audioEvents,
    finalScore: window.gameInstance ? window.gameInstance.score : 0,
    finalDistance: window.gameInstance ? Math.round(Math.abs(window.gameInstance.playerRig.position.z)) : 0
  }));

  console.log(`Recorded 10s gameplay! Score: ${finalScore}, Distance: ${finalDistance}m, Audio events: ${audioEvents.length}`);

  const webmPath = path.join(__dirname, 'gameplay.webm');
  fs.writeFileSync(webmPath, Buffer.from(base64Data, 'base64'));

  await browser.close();
  server.close();

  // ----------------------------------------------------
  // Clean Audio Synthesis (SFX + Looping BGM, No Voice)
  // ----------------------------------------------------
  console.log('Synthesizing clean audio track for 10s video...');
  const sampleRate = 44100;
  const totalDurationSec = 10.5;
  const totalSamples = Math.round(totalDurationSec * sampleRate);
  const masterL = new Float32Array(totalSamples);
  const masterR = new Float32Array(totalSamples);

  const bgmPcm = extractPcm(path.join(__dirname, 'src', 'assets', 'bgm.mp3'));
  const bgmJunglePcm = extractPcm(path.join(__dirname, 'src', 'assets', 'bgm_jungle.mp3'));
  const flapPcms = [
    extractPcm(path.join(__dirname, 'src', 'assets', 'sfx', 'flap_1.mp3')),
    extractPcm(path.join(__dirname, 'src', 'assets', 'sfx', 'flap_2.mp3')),
    extractPcm(path.join(__dirname, 'src', 'assets', 'sfx', 'flap_3.mp3'))
  ];

  // Synthetic glockenspiel ring chime
  function createChimePcm() {
    const durSec = 0.45;
    const numSamples = Math.round(durSec * sampleRate);
    const buf = Buffer.alloc(numSamples * 4);
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const s1 = Math.sin(2 * Math.PI * 784 * t) * Math.exp(-t * 9.0);
      const s2 = t > 0.08 ? Math.sin(2 * Math.PI * 1046.5 * (t - 0.08)) * Math.exp(-(t - 0.08) * 8.0) : 0;
      const val = Math.max(-1.0, Math.min(1.0, (s1 * 0.45 + s2 * 0.65) * 0.85));
      const s16 = val < 0 ? Math.round(val * 32768) : Math.round(val * 32767);
      buf.writeInt16LE(s16, i * 4);
      buf.writeInt16LE(s16, i * 4 + 2);
    }
    return buf;
  }
  const chimePcm = createChimePcm();

  // Synthetic triumphant brass fanfare + chimes
  function createFanfarePcm() {
    const durSec = 2.4;
    const numSamples = Math.round(durSec * sampleRate);
    const buf = Buffer.alloc(numSamples * 4);
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      let s = 0;
      // Arpeggio C5 -> E5 -> G5
      if (t < 0.16) {
        s += Math.sin(2 * Math.PI * 523.25 * t) * 0.38;
      } else if (t < 0.32) {
        s += Math.sin(2 * Math.PI * 659.25 * t) * 0.42;
      } else if (t < 0.48) {
        s += Math.sin(2 * Math.PI * 783.99 * t) * 0.46;
      } else {
        // Sustained triumphant major chord
        const ct = t - 0.48;
        const decay = Math.exp(-ct * 1.4);
        s += Math.sin(2 * Math.PI * 523.25 * ct) * 0.22 * decay;
        s += Math.sin(2 * Math.PI * 659.25 * ct) * 0.22 * decay;
        s += Math.sin(2 * Math.PI * 783.99 * ct) * 0.25 * decay;
        s += Math.sin(2 * Math.PI * 1046.50 * ct) * 0.32 * decay;
        // Chime sparkles
        if (ct > 0.08) s += Math.sin(2 * Math.PI * 1567.98 * (ct - 0.08)) * 0.18 * Math.exp(-(ct - 0.08) * 4);
        if (ct > 0.24) s += Math.sin(2 * Math.PI * 2093.00 * (ct - 0.24)) * 0.20 * Math.exp(-(ct - 0.24) * 4);
        if (ct > 0.40) s += Math.sin(2 * Math.PI * 2637.02 * (ct - 0.40)) * 0.22 * Math.exp(-(ct - 0.40) * 4);
      }
      const val = Math.max(-1.0, Math.min(1.0, s * 0.88));
      const s16 = val < 0 ? Math.round(val * 32768) : Math.round(val * 32767);
      buf.writeInt16LE(s16, i * 4);
      buf.writeInt16LE(s16, i * 4 + 2);
    }
    return buf;
  }
  const fanfarePcm = createFanfarePcm();

  function mixBuffer(pcmBuffer, startSample, gain = 1.0) {
    if (!pcmBuffer || pcmBuffer.length === 0) return;
    const numPcmSamples = pcmBuffer.length / 4;
    for (let i = 0; i < numPcmSamples; i++) {
      const targetIdx = startSample + i;
      if (targetIdx >= totalSamples) break;
      const l = (pcmBuffer.readInt16LE(i * 4 + 0) / 32768.0) * gain;
      const r = (pcmBuffer.readInt16LE(i * 4 + 2) / 32768.0) * gain;
      masterL[targetIdx] += l;
      masterR[targetIdx] += r;
    }
  }

  // Mix SFX events (flaps, chimes, and fanfare)
  let flapIndex = 0;
  let fanfareStartSample = -1;
  let fanfareEndSample = -1;
  let nextLevelSample = -1;

  for (const ev of audioEvents) {
    const startSample = Math.round((ev.timeMs / 1000) * sampleRate);
    if (startSample >= totalSamples) continue;

    if (ev.type === 'flap') {
      const pcm = flapPcms[flapIndex % flapPcms.length];
      flapIndex++;
      mixBuffer(pcm, startSample, 0.85);
    } else if (ev.type === 'score') {
      mixBuffer(chimePcm, startSample, 0.75);
    } else if (ev.type === 'fanfare') {
      mixBuffer(fanfarePcm, startSample, 0.95);
      fanfareStartSample = startSample;
      fanfareEndSample = startSample + Math.round(2.3 * sampleRate);
    } else if (ev.type === 'nextLevel') {
      nextLevelSample = startSample;
    }
  }

  // Mix clean looping BGM with fanfare ducking and Level 2 Jungle transition
  const bgmSamples = bgmPcm.length / 4;
  const bgmJungleSamples = bgmJunglePcm.length > 0 ? (bgmJunglePcm.length / 4) : bgmSamples;

  for (let i = 0; i < totalSamples; i++) {
    const isDucked = (i >= fanfareStartSample && i < fanfareEndSample);
    const bgmVol = isDucked ? 0.08 : 0.36;

    if (nextLevelSample !== -1 && i >= nextLevelSample && bgmJunglePcm.length > 0) {
      const jungleIdx = (i - nextLevelSample) % bgmJungleSamples;
      const l = (bgmJunglePcm.readInt16LE(jungleIdx * 4 + 0) / 32768.0) * bgmVol;
      const r = (bgmJunglePcm.readInt16LE(jungleIdx * 4 + 2) / 32768.0) * bgmVol;
      masterL[i] += l;
      masterR[i] += r;
    } else {
      const bgmIdx = i % bgmSamples;
      const l = (bgmPcm.readInt16LE(bgmIdx * 4 + 0) / 32768.0) * bgmVol;
      const r = (bgmPcm.readInt16LE(bgmIdx * 4 + 2) / 32768.0) * bgmVol;
      masterL[i] += l;
      masterR[i] += r;
    }
  }

  const audioWavPath = path.join(__dirname, 'gameplay_audio.wav');
  writeWavFile(audioWavPath, masterL, masterR, sampleRate);

  const mp4Path = path.join(__dirname, 'gameplay.mp4');
  const gifPath = path.join(__dirname, 'gameplay.gif');

  console.log('Encoding 10s MP4...');
  execSync(`"${FFMPEG_PATH}" -y -i "${webmPath}" -i "${audioWavPath}" -c:v libx264 -pix_fmt yuv420p -r 30 -c:a aac -b:a 192k -t 10 -shortest "${mp4Path}"`, { stdio: 'inherit' });

  console.log('Encoding 10s animated GIF...');
  execSync(`"${FFMPEG_PATH}" -y -i "${mp4Path}" -vf "fps=14,scale=560:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer" "${gifPath}"`, { stdio: 'inherit' });

  // Copy to brain artifact directory
  if (fs.existsSync(ARTIFACT_DIR)) {
    fs.copyFileSync(mp4Path, path.join(ARTIFACT_DIR, 'gameplay.mp4'));
    fs.copyFileSync(gifPath, path.join(ARTIFACT_DIR, 'gameplay.gif'));
    console.log(`Copied artifacts to ${ARTIFACT_DIR}`);
  }

  console.log('SUCCESS! Generated 10-second gameplay artifacts:');
  console.log(`- MP4: ${mp4Path}`);
  console.log(`- GIF: ${gifPath}`);
}

record10sGameplay().catch(err => {
  console.error('Error during 10s gameplay recording:', err);
  process.exit(1);
});
