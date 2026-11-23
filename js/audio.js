/**
 * Audio Engine: Web Audio API Synthesizer & Speech Assistant
 * Beroperasi 100% offline tanpa perlu file MP3 eksternal.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.speechAvailable = 'speechSynthesis' in window;
    this.preferredVoice = null;
    this.initSpeech();
  }

  initAudio() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initSpeech() {
    if (!this.speechAvailable) return;
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Cari suara bahasa Indonesia atau suara anak-anak ramah
      this.preferredVoice = voices.find(v => v.lang.startsWith('id') || v.lang.includes('ID')) ||
                            voices.find(v => v.lang.startsWith('ar')) ||
                            voices[0];
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.speechAvailable) {
      window.speechSynthesis.cancel();
    }
    return this.isMuted;
  }

  // --- Suara Sintesis Prosedural Web Audio API ---

  // 1. Suara Pop / Klik Kartu (Bubbly Pop)
  playPop() {
    if (this.isMuted) return;
    this.initAudio();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  // 2. Suara Buka Kartu Belajar (Sparkle Chime)
  playCardOpen() {
    if (this.isMuted) return;
    this.initAudio();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    });
  }

  // 3. Suara Jawaban Benar (Cheerful Glockenspiel Victory)
  playCorrect() {
    if (this.isMuted) return;
    this.initAudio();
    if (!this.ctx) return;

    const chords = [
      { f: 523.25, t: 0 },    // C5
      { f: 659.25, t: 0.1 },  // E5
      { f: 783.99, t: 0.2 },  // G5
      { f: 1046.50, t: 0.32 } // C6 (panjang & ceria)
    ];

    chords.forEach(c => {
      const now = this.ctx.currentTime + c.t;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(c.f, now);

      const duration = c.t === 0.32 ? 0.6 : 0.25;
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    });
  }

  // 4. Suara Petunjuk Lembut / Salah (Gentle Boing / Encouraging Marimba)
  playEncouraging() {
    if (this.isMuted) return;
    this.initAudio();
    if (!this.ctx) return;

    const tones = [
      { f: 392.00, t: 0 },    // G4
      { f: 329.63, t: 0.18 }  // E4 (lembut & tidak menakuti anak)
    ];

    tones.forEach(tone => {
      const now = this.ctx.currentTime + tone.t;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(tone.f, now);
      osc.frequency.exponentialRampToValueAtTime(tone.f * 0.95, now + 0.25);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  // 5. Suara Bintang Berkilau (Star Twinkle)
  playStarDing() {
    if (this.isMuted) return;
    this.initAudio();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1174.66, now); // D6
    osc.frequency.exponentialRampToValueAtTime(1567.98, now + 0.12); // G6

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  // 6. Suara Fanfare Akhir Kuis (Level Selesai)
  playFanfare() {
    if (this.isMuted) return;
    this.initAudio();
    if (!this.ctx) return;

    const melody = [
      { f: 523.25, dur: 0.12, del: 0 },     // C
      { f: 523.25, dur: 0.12, del: 0.14 },  // C
      { f: 523.25, dur: 0.12, del: 0.28 },  // C
      { f: 659.25, dur: 0.35, del: 0.42 },  // E
      { f: 587.33, dur: 0.15, del: 0.8 },   // D
      { f: 659.25, dur: 0.15, del: 0.96 },  // E
      { f: 783.99, dur: 0.55, del: 1.12 }   // G
    ];

    melody.forEach(m => {
      const now = this.ctx.currentTime + m.del;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(m.f, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + m.dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + m.dur + 0.05);
    });
  }

  // --- Narasi Suara / Pelafalan Teks (TTS) ---
  speak(text, lang = 'id-ID') {
    if (this.isMuted || !this.speechAvailable) return;
    try {
      window.speechSynthesis.cancel(); // Hentikan yang sedang berbicara
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Sedikit lebih lambat agar jelas untuk kelas 1
      utterance.pitch = 1.15; // Ramah dan ceria untuk anak
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("TTS gagal dijalankan:", e);
    }
  }
}

window.soundEngine = new SoundEngine();
