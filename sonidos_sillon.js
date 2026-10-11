// sonidos_sillon.js - Motor de Audio Procedural Criollo (Web Audio API)
// 100% nativo: genera efectos de sonido en tiempo real sin dependencias ni archivos externos.

class AudioCriollo {
  constructor() {
    this.audioCtx = null;
    this.silenciado = false;
    this.iniciado = false;

    // Recuperar preferencia de silencio si existe
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const guardado = localStorage.getItem('sillon_audio_mute');
        if (guardado !== null) {
          this.silenciado = guardado === 'true';
        }
      } catch (e) {}
    }
  }

  // Inicializar o reanudar AudioContext tras la primera interacción del usuario
  obtenerContexto() {
    if (typeof window === 'undefined') return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;

    if (!this.audioCtx) {
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    this.iniciado = true;
    return this.audioCtx;
  }

  toggleSilencio() {
    this.silenciado = !this.silenciado;
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('sillon_audio_mute', String(this.silenciado));
      } catch (e) {}
    }
    return this.silenciado;
  }

  estaSilenciado() {
    return this.silenciado;
  }

  // 1. GOLPE DE SELLO OFICIAL (Mesa de entradas / Firma de Decreto DNU)
  reproducirSello() {
    if (this.silenciado) return;
    const ctx = this.obtenerContexto();
    if (!ctx) return;

    const t = ctx.currentTime;

    // A. Impacto grave de madera
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(32, t + 0.12);

    gain.gain.setValueAtTime(0.7, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.18);

    // B. Chasquido de tinta y papel (buffer de ruido filtrado)
    const bufferSize = ctx.sampleRate * 0.08;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(900, t);
    filter.Q.setValueAtTime(1.8, t);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.35, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noise.start(t);
  }

  // 2. PLACA ROJA DE CRÓNICA TV (Fanfarria estridente / Sirena de urgencia)
  reproducirPlacaCronica() {
    if (this.silenciado) return;
    const ctx = this.obtenerContexto();
    if (!ctx) return;

    const t = ctx.currentTime;
    const notas = [
      { f: 523.25, dur: 0.12 }, // C5
      { f: 659.25, dur: 0.12 }, // E5
      { f: 783.99, dur: 0.16 }, // G5
      { f: 1046.50, dur: 0.35 } // C6 (agudo sostenido)
    ];

    let tiempoActual = t;
    notas.forEach((n, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === notas.length - 1 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(n.f, tiempoActual);

      gain.gain.setValueAtTime(0.32, tiempoActual);
      gain.gain.exponentialRampToValueAtTime(0.001, tiempoActual + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(tiempoActual);
      osc.stop(tiempoActual + n.dur + 0.02);

      tiempoActual += n.dur * 0.85;
    });
  }

  // 3. CAMPANA DE LA CITY & MONEDAS (Mesa de Dinero BCRA / Cotización Dólar)
  reproducirCampanaCity() {
    if (this.silenciado) return;
    const ctx = this.obtenerContexto();
    if (!ctx) return;

    const t = ctx.currentTime;
    [1320, 2640].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      const amp = idx === 0 ? 0.35 : 0.18;
      gain.gain.setValueAtTime(amp, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.7);
    });
  }

  // 4. LATIDO CARDÍACO TENSOR (UMP / Coronarias en riesgo / Mecha Crítica)
  reproducirLatido() {
    if (this.silenciado) return;
    const ctx = this.obtenerContexto();
    if (!ctx) return;

    const t = ctx.currentTime;
    // Doble golpe: "Ba-bum"
    [0, 0.16].forEach((offset, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const freqIni = idx === 0 ? 75 : 62;
      osc.frequency.setValueAtTime(freqIni, t + offset);
      osc.frequency.exponentialRampToValueAtTime(38, t + offset + 0.12);

      gain.gain.setValueAtTime(0.55, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t + offset);
      osc.stop(t + offset + 0.15);
    });
  }

  // 5. FLASH DE PRENSA / PAPARAZZI (Conferencia 9 AM / Comodoro Py)
  reproducirFlash() {
    if (this.silenciado) return;
    const ctx = this.obtenerContexto();
    if (!ctx) return;

    const t = ctx.currentTime;
    // Chasquido de obturador rápido
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(1800, t);
    osc.frequency.exponentialRampToValueAtTime(200, t + 0.04);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  // 6. CLICK / MÁQUINA DE ESCRIBIR (Trámite en Comodoro Py / Telegrama)
  reproducirClick() {
    if (this.silenciado) return;
    const ctx = this.obtenerContexto();
    if (!ctx) return;

    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950, t);
    osc.frequency.exponentialRampToValueAtTime(250, t + 0.025);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.035);
  }
}

// Instancia singleton compartida
const audioCriollo = new AudioCriollo();

// Exportación modular para Node y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioCriollo, audioCriollo };
}

if (typeof window !== 'undefined') {
  window.AudioCriollo = AudioCriollo;
  window.audioCriollo = audioCriollo;
}
