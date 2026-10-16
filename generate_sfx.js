import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SAMPLE_RATE = 44100;
const FFMPEG_PATH = 'C:\\Users\\buhre\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.2-full_build\\bin\\ffmpeg.exe';

function createWavBuffer(samples, sampleRate = SAMPLE_RATE) {
  const numSamples = samples.length;
  const buffer = Buffer.alloc(44 + numSamples * 2);

  // RIFF chunk descriptor
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write('WAVE', 8);

  // "fmt " sub-chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20);  // AudioFormat (1 for PCM)
  buffer.writeUInt16LE(1, 22);  // NumChannels (1 = Mono)
  buffer.writeUInt32LE(sampleRate, 24); // SampleRate
  buffer.writeUInt32LE(sampleRate * 2, 28); // ByteRate (SampleRate * NumChannels * BitsPerSample/8)
  buffer.writeUInt16LE(2, 32);  // BlockAlign (NumChannels * BitsPerSample/8)
  buffer.writeUInt16LE(16, 34); // BitsPerSample (16 bits)

  // "data" sub-chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  // Write 16-bit PCM samples
  for (let i = 0; i < numSamples; i++) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(Math.round(s < 0 ? s * 0x8000 : s * 0x7FFF), 44 + i * 2);
  }

  return buffer;
}

// 1. Synthesize Wing Flap (feather air displacement + wing flutter whoosh)
function generateFlapSound(variation = 0) {
  const duration = 0.18;
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  const freqStart = 180 + variation * 20;
  const freqEnd = 50 + variation * 10;
  const flutterRate = 32 + variation * 5;

  let noiseState = 0;
  let filterY1 = 0;
  let filterY2 = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = t / duration;

    // Amplitude envelope: fast attack (15ms), smooth exponential decay
    let env = 0;
    if (progress < 0.12) {
      env = progress / 0.12;
    } else {
      env = Math.pow(1 - (progress - 0.12) / 0.88, 2.2);
    }

    // Low thump frequency drop
    const currentFreq = freqStart * Math.pow(freqEnd / freqStart, progress);
    const thump = Math.sin(2 * Math.PI * currentFreq * t);

    // Flutter modulation (fanning wings)
    const flutter = 1.0 + 0.35 * Math.sin(2 * Math.PI * flutterRate * t);

    // Filtered noise for feather whoosh
    const rawNoise = (Math.random() * 2 - 1);
    // 2-pole low-pass / band-pass filter tracking frequency
    const cutoff = 400 * (1 - progress * 0.6) + 150;
    const rc = 1.0 / (2 * Math.PI * cutoff);
    const dt = 1.0 / SAMPLE_RATE;
    const alpha = dt / (rc + dt);
    filterY1 += alpha * (rawNoise - filterY1);
    filterY2 += alpha * (filterY1 - filterY2);

    const whoosh = filterY2 * 1.8;

    // Combined sound: mix whoosh and low pressure thump
    samples[i] = (thump * 0.55 + whoosh * 0.75) * env * flutter * 0.85;
  }

  return samples;
}

// 2. Synthesize Cartoon Bonk (hollow pipe / comical impact)
function generateBonkSound() {
  const duration = 0.42;
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  const baseFreq = 340; // Fundamental bonk frequency

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = t / duration;

    // Sharp strike envelope
    let env = 0;
    if (progress < 0.008) {
      env = progress / 0.008; // 3ms attack
    } else {
      env = Math.exp(-progress * 9.5); // Fast hollow decay
    }

    // Classic cartoon bonk pitch drop (starts at ~800Hz, drops sharply to 260Hz)
    const pitchDrop = baseFreq * (1.0 + 1.6 * Math.exp(-progress * 28.0));

    // Hollow pipe harmonics (slightly inharmonic like a physical pipe/anvil)
    const h1 = Math.sin(2 * Math.PI * pitchDrop * t);
    const h2 = Math.sin(2 * Math.PI * (pitchDrop * 2.08) * t) * 0.6;
    const h3 = Math.sin(2 * Math.PI * (pitchDrop * 3.12) * t) * 0.35;
    const h4 = Math.sin(2 * Math.PI * (pitchDrop * 4.45) * t) * 0.2;

    // Impact click at very start (first 10ms)
    let click = 0;
    if (t < 0.015) {
      click = (Math.random() * 2 - 1) * (1 - t / 0.015) * 0.6;
    }

    // Subtle pitch modulation (cartoon springy ring)
    const ringWobble = 1.0 + 0.04 * Math.sin(2 * Math.PI * 45 * t);

    samples[i] = (h1 + h2 + h3 + h4 + click) * env * ringWobble * 0.75;
  }

  return samples;
}

// 3. Synthesize Game Over (Comical Sad Trombone: "Wah-wah-wah-waaaah")
function generateGameOverSound() {
  // 4 notes: F4 (349Hz), E4 (330Hz), Eb4 (311Hz), D4 down to C#4 with sad pitch slide
  const noteDurations = [0.24, 0.24, 0.24, 0.85];
  const totalDuration = noteDurations.reduce((a, b) => a + b, 0);
  const numSamples = Math.floor(SAMPLE_RATE * totalDuration);
  const samples = new Float32Array(numSamples);

  const notes = [
    { freq: 349.23, start: 0, dur: 0.24, slideTo: 345, wahRate: 7 },
    { freq: 329.63, start: 0.24, dur: 0.24, slideTo: 325, wahRate: 7 },
    { freq: 311.13, start: 0.48, dur: 0.24, slideTo: 306, wahRate: 7 },
    { freq: 293.66, start: 0.72, dur: 0.85, slideTo: 261.63, wahRate: 5.5, sadFlutter: true } // Long slide to C4
  ];

  for (const n of notes) {
    const startIndex = Math.floor(n.start * SAMPLE_RATE);
    const noteSamples = Math.floor(n.dur * SAMPLE_RATE);

    for (let j = 0; j < noteSamples; j++) {
      const idx = startIndex + j;
      if (idx >= numSamples) break;

      const tNote = j / SAMPLE_RATE;
      const progress = tNote / n.dur;

      // Note envelope: smooth brass swell and decay
      let env = 0;
      const attackTime = 0.04;
      if (progress < attackTime / n.dur) {
        env = progress / (attackTime / n.dur);
      } else if (!n.sadFlutter) {
        env = Math.pow(1 - (tNote - attackTime) / (n.dur - attackTime), 0.6);
      } else {
        // Last long note: holds and then fades
        if (progress < 0.6) {
          env = 1.0;
        } else {
          env = Math.pow(1 - (progress - 0.6) / 0.4, 1.8);
        }
      }

      // Pitch glide
      let currentFreq = n.freq + (n.slideTo - n.freq) * Math.pow(progress, 1.2);

      // Sad brass vibrato / tremolo ("wah")
      const wahDepth = n.sadFlutter ? 0.35 : 0.25;
      const wahMod = 1.0 + wahDepth * Math.sin(2 * Math.PI * n.wahRate * tNote);

      if (n.sadFlutter && progress > 0.3) {
        // Avian sad wobble
        currentFreq += Math.sin(2 * Math.PI * 6.0 * tNote) * 8.0;
      }

      // Brassy timbre: combination of odd & even harmonics (sawtooth approximation)
      let brass = 0;
      for (let harm = 1; harm <= 7; harm++) {
        const harmAmp = 1.0 / Math.pow(harm, 1.15);
        brass += Math.sin(2 * Math.PI * (currentFreq * harm) * tNote) * harmAmp;
      }
      brass *= 0.35;

      samples[idx] = brass * env * wahMod * 0.75;
    }
  }

  return samples;
}

// Generate files
const outDir = path.resolve('src/assets/sfx');
const publicDir = path.resolve('public/sfx');
const unityDir = path.resolve('unity/Assets/Audio/SFX');

[outDir, publicDir, unityDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

console.log('Generating procedural audio assets...');

const sounds = [
  { name: 'flap_1', data: generateFlapSound(0) },
  { name: 'flap_2', data: generateFlapSound(1) },
  { name: 'flap_3', data: generateFlapSound(2) },
  { name: 'bonk', data: generateBonkSound() },
  { name: 'gameover', data: generateGameOverSound() }
];

for (const s of sounds) {
  const wavPath = path.join(outDir, `${s.name}.wav`);
  const mp3Path = path.join(outDir, `${s.name}.mp3`);
  const wavBuffer = createWavBuffer(s.data);
  fs.writeFileSync(wavPath, wavBuffer);

  // Convert to high quality MP3 via ffmpeg
  try {
    execSync(`"${FFMPEG_PATH}" -y -i "${wavPath}" -codec:a libmp3lame -qscale:a 2 "${mp3Path}"`, { stdio: 'pipe' });
    console.log(`Created: ${s.name}.mp3`);
    
    // Copy to public/sfx and unity/Assets/Audio/SFX
    fs.copyFileSync(mp3Path, path.join(publicDir, `${s.name}.mp3`));
    fs.copyFileSync(mp3Path, path.join(unityDir, `${s.name}.mp3`));
  } catch (err) {
    console.error(`Failed to encode ${s.name}:`, err.message);
  }
}

console.log('All SFX successfully generated and distributed!');
