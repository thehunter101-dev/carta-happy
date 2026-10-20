/**
 * Toast notification system
 */

interface ToastOptions {
  message: string;
  duration?: number;
  icon?: string;
  iconColor?: string;
}

let toastElement: HTMLElement | null = null;
let toastMessageElement: HTMLElement | null = null;
let toastIconElement: HTMLElement | null = null;
let toastTimeout: ReturnType<typeof setTimeout> | null = null;

function getToastElements() {
  if (!toastElement) {
    toastElement = document.getElementById('toast');
  }
  if (!toastMessageElement) {
    toastMessageElement = document.getElementById('toast-message');
  }
  if (!toastIconElement && toastElement) {
    toastIconElement = toastElement.querySelector('.material-symbols-outlined');
  }
  return { toastElement, toastMessageElement, toastIconElement };
}

export function showToast(options: ToastOptions): void {
  const { toastElement, toastMessageElement, toastIconElement } = getToastElements();

  if (!toastElement || !toastMessageElement) {
    console.warn('Toast elements not found in DOM');
    return;
  }

  toastMessageElement.textContent = options.message;

  if (toastIconElement && options.icon) {
    toastIconElement.textContent = options.icon;
  }
  if (toastIconElement && options.iconColor) {
    toastIconElement.style.color = options.iconColor;
  }

  toastElement.classList.remove('opacity-0');
  toastElement.classList.add('opacity-100');

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  const duration = options.duration ?? 3000;
  toastTimeout = setTimeout(() => {
    hideToast();
  }, duration);
}

export function hideToast(): void {
  const { toastElement } = getToastElements();
  if (toastElement) {
    toastElement.classList.remove('opacity-100');
    toastElement.classList.add('opacity-0');
  }
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
}