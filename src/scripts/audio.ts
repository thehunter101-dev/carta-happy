/**
 * Audio melody system using Web Audio API
 */

let audioCtx: AudioContext | null = null;
let melodyInterval: ReturnType<typeof setInterval> | null = null;
let isPlayingAudio = false;

function getAudioContext(): AudioContext | null {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
      return null;
    }
  }
  return audioCtx;
}

function playNote(freq: number, start: number, duration: number): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.06, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration);
}

function playBirthdayChime(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  // Soft ambient music box notes (Happy Birthday tune snippet)
  const notes = [261.63, 261.63, 293.66, 261.63, 349.23, 329.63];
  notes.forEach((freq, idx) => {
    playNote(freq, now + idx * 0.35, 0.5);
  });
}

export function toggleAudio(button: HTMLButtonElement, iconElement: HTMLElement): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (!isPlayingAudio) {
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    playBirthdayChime();
    melodyInterval = setInterval(playBirthdayChime, 4500);
    iconElement.textContent = 'music_note';
    showToast({ message: 'Música ambiental activada 🎵', icon: 'music_note', iconColor: '#D95D6A' });
    isPlayingAudio = true;
  } else {
    if (melodyInterval) {
      clearInterval(melodyInterval);
      melodyInterval = null;
    }
    iconElement.textContent = 'volume_up';
    showToast({ message: 'Música en pausa', icon: 'volume_up', iconColor: '#574142' });
    isPlayingAudio = false;
  }
}

export function cleanupAudio(): void {
  if (melodyInterval) {
    clearInterval(melodyInterval);
    melodyInterval = null;
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
  isPlayingAudio = false;
}

// Re-export showToast for convenience
import { showToast } from './toast';