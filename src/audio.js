import bgmUrl from './assets/bgm.mp3';
import flap1Url from './assets/sfx/flap_1.mp3';
import flap2Url from './assets/sfx/flap_2.mp3';
import flap3Url from './assets/sfx/flap_3.mp3';
import bonkUrl from './assets/sfx/bonk.mp3';
import gameoverUrl from './assets/sfx/gameover.mp3';

// Eager load all bird announcer voice clips
const voiceModules = import.meta.glob('./assets/voice/*.mp3', { eager: true, import: 'default' });

// Web Audio API Procedural Synthesizer + Audio Buffer Sampler + BGM + Announcer
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isGameOver = false;

    // Background Music Player
    this.bgm = new Audio(bgmUrl);
    this.bgm.loop = true;
    this.bgm.volume = 0.38;
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

    // Preload Hyped Bird Announcer Voice Clips
    this.voiceClips = {};
    for (const [pathKey, url] of Object.entries(voiceModules)) {
      const match = pathKey.match(/voice_(.*)\.mp3$/);
      if (match) {
        const key = match[1];
        const audio = new Audio(url);
        audio.preload = 'auto';
        this.voiceClips[key] = audio;
      }
    }
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

  // Mortal Kombat Announcer Voice ("One!", "Two!", "Fight!", "Fatality!", etc.)
  playAnnouncer(score) {
    if (this.isMuted) return;
    this.init();

    let clipKey = `${score}`;
    if (!this.voiceClips[clipKey]) {
      const combos = ['combo1', 'combo2', 'combo3', `${((score - 1) % 10) + 1}`];
      clipKey = combos[Math.floor(Math.random() * combos.length)];
    }

    const audio = this.voiceClips[clipKey];
    if (audio) {
      this.setBGMVolume(0.18);
      const isMilestone = (score % 5 === 0) || score > 20;
      const duckDuration = isMilestone ? 1400 : 850;
      setTimeout(() => {
        if (!this.isGameOver) this.setBGMVolume(0.38);
      }, duckDuration);

      audio.currentTime = 0;
      audio.volume = 1.0; // Booming Mortal Kombat delivery
      audio.play().catch(() => {});
    }
  }

  playFight() {
    if (this.isMuted) return;
    this.init();
    const audio = this.voiceClips['fight'];
    if (audio) {
      this.setBGMVolume(0.18);
      setTimeout(() => {
        if (!this.isGameOver) this.setBGMVolume(0.38);
      }, 950);
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play().catch(() => {});
    }
  }

  playFatality() {
    if (this.isMuted) return;
    this.init();
    const audio = this.voiceClips['fatality'];
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 1.0;
      audio.play().catch(() => {});
    }
  }
}

export const sound = new SoundFX();
