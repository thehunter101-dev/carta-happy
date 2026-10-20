/**
 * Main entry point - initializes all interactive features
 */

import { initConfetti, burstConfetti, cleanupConfetti } from './confetti';
import { initCarousel, cleanupCarousel } from './carousel';
import { toggleAudio, cleanupAudio } from './audio';
import { showToast } from './toast';

function initShareButton(): void {
  const shareBtn = document.getElementById('share-btn');
  shareBtn?.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '¡Feliz Cumpleaños!',
          text: 'Una hermosa carta digital llena de cariño para celebrar tu día.',
          url: window.location.href,
        });
      } catch (e) {
        // User cancelled or error
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast({ message: '¡Enlace de la carta copiado con éxito! 💌', icon: 'check_circle', iconColor: '#DCA54C' });
      } catch (e) {
        showToast({ message: 'No se pudo copiar el enlace', icon: 'error', iconColor: '#BA1A1A' });
      }
    }
  });
}

function initSendWishButton(): void {
  const sendWishBtn = document.getElementById('send-wish-btn');
  sendWishBtn?.addEventListener('click', () => {
    showToast({ message: '¡Tu abrazo y deseo han sido enviados con amor! ✨', icon: 'favorite', iconColor: '#D95D6A' });
    burstConfetti(45);
  });
}

function initConfettiButton(): void {
  const confettiBtn = document.getElementById('confetti-btn');
  confettiBtn?.addEventListener('click', () => {
    burstConfetti(110);
    showToast({ message: '¡Felicidades y muchos deseos cumplidos! 🎊', icon: 'celebration', iconColor: '#F08C65' });
  });
}

function initAudioButton(): void {
  const audioBtn = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');
  if (audioBtn && audioIcon) {
    audioBtn.addEventListener('click', () => toggleAudio(audioBtn as HTMLButtonElement, audioIcon));
  }
}

export function initAll(): void {
  // Initialize all systems
  initConfetti();
  initCarousel();
  initShareButton();
  initSendWishButton();
  initConfettiButton();
  initAudioButton();
}

export function cleanupAll(): void {
  cleanupConfetti();
  cleanupCarousel();
  cleanupAudio();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}