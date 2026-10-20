/**
 * Carousel interaction logic
 */

interface CarouselElements {
  track: HTMLElement | null;
  dots: NodeListOf<HTMLElement>;
  prevBtn: HTMLElement | null;
  nextBtn: HTMLElement | null;
}

let carouselState = {
  currentSlide: 0,
  totalSlides: 0,
  elements: null as CarouselElements | null,
  touchStartX: 0,
};

function getCarouselElements(): CarouselElements {
  return {
    track: document.getElementById('carousel-track'),
    dots: document.querySelectorAll('.dot-btn'),
    prevBtn: document.getElementById('prev-slide'),
    nextBtn: document.getElementById('next-slide'),
  };
}

function updateCarouselUI(index: number): void {
  const { elements } = carouselState;
  if (!elements) return;

  carouselState.currentSlide = (index + carouselState.totalSlides) % carouselState.totalSlides;

  if (elements.track) {
    elements.track.style.transform = `translateX(-${carouselState.currentSlide * 100}%)`;
  }

  elements.dots.forEach((dot, idx) => {
    if (idx === carouselState.currentSlide) {
      dot.classList.remove('bg-surface-variant', 'w-3');
      dot.classList.add('bg-primary', 'w-6');
    } else {
      dot.classList.remove('bg-primary', 'w-6');
      dot.classList.add('bg-surface-variant', 'w-3');
    }
  });
}

function handlePrevClick(): void {
  updateCarouselUI(carouselState.currentSlide - 1);
}

function handleNextClick(): void {
  updateCarouselUI(carouselState.currentSlide + 1);
}

function handleDotClick(event: Event): void {
  const target = event.currentTarget as HTMLElement;
  const index = parseInt(target.getAttribute('data-index') || '0', 10);
  updateCarouselUI(index);
}

function handleTouchStart(event: TouchEvent): void {
  carouselState.touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event: TouchEvent): void {
  const touchEndX = event.changedTouches[0].screenX;
  const diff = carouselState.touchStartX - touchEndX;

  if (diff > 45) {
    updateCarouselUI(carouselState.currentSlide + 1);
  } else if (diff < -45) {
    updateCarouselUI(carouselState.currentSlide - 1);
  }
}

export function initCarousel(): void {
  const elements = getCarouselElements();
  carouselState.elements = elements;
  carouselState.totalSlides = elements.dots.length;

  if (carouselState.totalSlides === 0) {
    console.warn('No carousel slides found');
    return;
  }

  // Initial UI state
  updateCarouselUI(0);

  // Event listeners
  elements.prevBtn?.addEventListener('click', handlePrevClick);
  elements.nextBtn?.addEventListener('click', handleNextClick);
  elements.dots.forEach((dot) => {
    dot.addEventListener('click', handleDotClick);
  });

  // Touch swipe support
  elements.track?.addEventListener('touchstart', handleTouchStart, { passive: true });
  elements.track?.addEventListener('touchend', handleTouchEnd, { passive: true });
}

export function cleanupCarousel(): void {
  const { elements } = carouselState;
  if (!elements) return;

  elements.prevBtn?.removeEventListener('click', handlePrevClick);
  elements.nextBtn?.removeEventListener('click', handleNextClick);
  elements.dots.forEach((dot) => {
    dot.removeEventListener('click', handleDotClick);
  });
  elements.track?.removeEventListener('touchstart', handleTouchStart);
  elements.track?.removeEventListener('touchend', handleTouchEnd);
}