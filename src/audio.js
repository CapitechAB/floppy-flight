import bgmUrl from './assets/bgm.mp3';
import bgmJungleUrl from './assets/bgm_jungle.mp3';
import flap1Url from './assets/sfx/flap_1.mp3';
import flap2Url from './assets/sfx/flap_2.mp3';
import flap3Url from './assets/sfx/flap_3.mp3';
import bonkUrl from './assets/sfx/bonk.mp3';
import gameoverUrl from './assets/sfx/gameover.mp3';

// Web Audio API Procedural Synthesizer + Audio Buffer Sampler + BGM
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isGameOver = false;

    // Background Music Players for Level 1 (Meadow) and Level 2 (Jungle)
    this.bgmTracks = {
      1: new Audio(bgmUrl),
      2: new Audio(bgmJungleUrl)
    };
    for (const audio of Object.values(this.bgmTracks)) {
      audio.loop = true;
      audio.volume = 0.38;
      audio.preload = 'auto';
    }
    this.currentLevel = 1;
    this.bgm = this.bgmTracks[1];
    this.bgmStarted = false;

    // Preloaded Audio HTML5 elements for immediate instant response
    this.sfxUrls = {
      flap1: flap1Url,
      flap2: flap2Url,
      flap3: flap3Url,
      bonk: bonkUrl,
      gameover: gameoverUrl
    };

    this.sfxAudio = {};
    for (const [key, url] of Object.entries(this.sfxUrls)) {
      const audio = new Audio(url);
      audio.preload = 'auto';
      this.sfxAudio[key] = audio;
    }

    // Decoded Web Audio Buffers for zero-latency polyphony in VR
    this.buffers = {};
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.loadAudioBuffers();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.startBGM();
  }

  async loadAudioBuffers() {
    if (!this.ctx) return;
    for (const [key, url] of Object.entries(this.sfxUrls)) {
      try {
        const res = await fetch(url);
        const arrayBuffer = await res.arrayBuffer();
        this.buffers[key] = await this.ctx.decodeAudioData(arrayBuffer);
      } catch (e) {
        // Fallback to HTML5 audio element
      }
    }
  }

  startBGM() {
    if (this.isMuted || this.bgmStarted) return;
    this.bgm.play().then(() => {
      this.bgmStarted = true;
    }).catch(() => {
      // Browser autoplay policy: will trigger on next user interaction
    });
  }

  pauseBGM() {
    if (this.bgm) {
      this.bgm.pause();
    }
  }

  resumeBGM() {
    if (this.bgm && !this.isMuted && this.bgmStarted) {
      this.bgm.play().catch(() => {});
    }
  }

  setBGMVolume(vol) {
    if (this.bgm) {
      this.bgm.volume = vol;
    }
  }

  setLevel(level = 1) {
    if (this.currentLevel === level) return;
    const wasPlaying = this.bgm && !this.bgm.paused;
    if (this.bgm) {
      this.bgm.pause();
      this.bgm.currentTime = 0;
    }
    this.currentLevel = level;
    this.bgm = this.bgmTracks[level] || this.bgmTracks[1];
    this.bgm.volume = this.isMuted ? 0 : 0.38;
    if (wasPlaying || this.bgmStarted) {
      this.bgm.play().catch(() => {});
    }
  }

  // Helper to play decoded audio buffer with zero latency and optional pitch modulation
  playBuffer(buffer, volume = 0.8, pitchRate = 1.0) {
    if (this.isMuted || !this.ctx || !buffer) return false;
    try {
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.playbackRate.setValueAtTime(pitchRate, this.ctx.currentTime);
      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
      source.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      source.start(0);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Fallback for HTML5 audio
  playAudioClone(audio, volume = 0.8, pitchRate = 1.0) {
    if (this.isMuted || !audio) return;
    try {
      const clone = audio.cloneNode();
      clone.volume = volume;
      clone.playbackRate = pitchRate;
      clone.play().catch(() => {});
    } catch (e) {}
  }

  // 1. Wing Flapping Sound Effect for every flap
  playFlap() {
    if (this.isMuted) return;
    this.init();

    // Randomize between 3 flap samples with slight pitch variation (0.94 - 1.06)
    const flapKeys = ['flap1', 'flap2', 'flap3'];
    const chosenKey = flapKeys[Math.floor(Math.random() * flapKeys.length)];
    const pitch = 0.94 + Math.random() * 0.12;
    const vol = 0.82;

    let played = false;
    if (this.buffers[chosenKey]) {
      played = this.playBuffer(this.buffers[chosenKey], vol, pitch);
    }
    if (!played && this.sfxAudio[chosenKey]) {
      this.playAudioClone(this.sfxAudio[chosenKey], vol, pitch);
    }

    // Procedural wind flutter whoosh enhancement layer
    if (this.ctx) {
      this.playProceduralWingAir();
    }
  }

  playProceduralWingAir() {
    try {
      const t = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.45;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(520, t);
      filter.frequency.exponentialRampToValueAtTime(160, t + 0.11);
      filter.Q.setValueAtTime(2.2, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.12);
    } catch (e) {}
  }

  // 2. Cartoon Bonk Sound Effect on collision
  playBonk() {
    if (this.isMuted) return;
    this.init();

    // Duck BGM so the bonk hits hard
    this.setBGMVolume(0.18);
    setTimeout(() => {
      if (!this.isGameOver) this.setBGMVolume(0.38);
    }, 400);

    let played = false;
    if (this.buffers['bonk']) {
      played = this.playBuffer(this.buffers['bonk'], 0.95, 0.98 + Math.random() * 0.04);
    }
    if (!played && this.sfxAudio['bonk']) {
      this.playAudioClone(this.sfxAudio['bonk'], 0.95, 1.0);
    }

    // Procedural low impact thud
    if (this.ctx) {
      try {
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(55, t + 0.28);

        gain.gain.setValueAtTime(0.45, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.32);
      } catch (e) {}
    }
  }

  // 3. Comical Sad Trombone Game Over Sound Effect ("Wah-wah-wah-waaaah")
  playGameOver() {
    if (this.isMuted) return;
    this.init();
    this.isGameOver = true;

    // Duck BGM during the sad fanfare
    this.setBGMVolume(0.12);

    let played = false;
    if (this.buffers['gameover']) {
      played = this.playBuffer(this.buffers['gameover'], 0.92, 1.0);
    }
    if (!played && this.sfxAudio['gameover']) {
      this.playAudioClone(this.sfxAudio['gameover'], 0.92, 1.0);
    }
  }

  // Collision + Game Over Combo
  playCrash() {
    this.playBonk();
    setTimeout(() => {
      this.playGameOver();
    }, 240);
  }

  // Golden ring / chime score effect
  playScore() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const playChime = (freq, startTime, duration) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.01, startTime);
        gain.gain.linearRampToValueAtTime(0.35, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      playChime(784, t, 0.22); // G5
      playChime(1046.5, t + 0.08, 0.35); // C6
    } catch (e) {}
  }

  // 5. Celebratory Level Cleared Brass Fanfare + Sparkly Chimes
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Duck BGM during fanfare
    this.setBGMVolume(0.08);

    try {
      const t = this.ctx.currentTime;

      // Brass note helper: dual detuned oscillators (sawtooth + triangle) with brass filter sweep
      const playBrassNote = (freq, startTime, duration, volume = 0.35) => {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, startTime);
        osc2.frequency.setValueAtTime(freq * 1.005, startTime); // detune for rich ensemble

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 1.5, startTime);
        filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 5.2, 3400), startTime + 0.05);
        filter.frequency.exponentialRampToValueAtTime(Math.min(freq * 2.2, 2200), startTime + duration);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(volume, startTime + 0.035);
        gain.gain.setValueAtTime(volume * 0.85, startTime + duration * 0.7);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start(startTime);
        osc2.start(startTime);
        osc1.stop(startTime + duration);
        osc2.stop(startTime + duration);
      };

      // Sparkly chime bells helper
      const playChime = (freq, startTime, duration = 0.45) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.18, startTime + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      // 1. Triumphant flourish arpeggio (C5 - E5 - G5)
      playBrassNote(523.25, t + 0.00, 0.16, 0.32); // C5
      playBrassNote(659.25, t + 0.16, 0.16, 0.34); // E5
      playBrassNote(783.99, t + 0.32, 0.18, 0.36); // G5

      // 2. Big triumphant sustained major chord at C6
      const chordTime = t + 0.50;
      const chordDuration = 1.6;
      playBrassNote(523.25, chordTime, chordDuration, 0.28);  // C5
      playBrassNote(659.25, chordTime, chordDuration, 0.28);  // E5
      playBrassNote(783.99, chordTime, chordDuration, 0.30);  // G5
      playBrassNote(1046.50, chordTime, chordDuration, 0.36); // C6

      // 3. Sparkly celebration bells / chimes cascade
      playChime(1567.98, chordTime + 0.06, 0.5); // G6
      playChime(2093.00, chordTime + 0.22, 0.5); // C7
      playChime(2637.02, chordTime + 0.38, 0.5); // E7
      playChime(3135.96, chordTime + 0.54, 0.6); // G7
    } catch (e) {}

    // Restore BGM after fanfare
    setTimeout(() => {
      if (!this.isGameOver) this.setBGMVolume(0.38);
    }, 2300);
  }

  // Announcer voice removed per user request
  playAnnouncer(score) {}
  playFight() {}
  playUhOh() {}
  playFatality() {}
}

export const sound = new SoundFX();
