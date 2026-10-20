/**
 * Confetti particle system
 */

interface ConfettiParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  reset: () => void;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const colors = ['#D95D6A', '#F08C65', '#DCA54C', '#FDC266', '#FFB2B6', '#E6E2DC'];

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let particles: ConfettiParticle[] = [];
let confettiActive = false;
let animationFrameId: number | null = null;

function getCanvasContext(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } | null {
  if (!canvas) {
    canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement | null;
  }
  if (canvas && !ctx) {
    ctx = canvas.getContext('2d');
  }
  if (!canvas || !ctx) {
    return null;
  }
  return { canvas, ctx };
}

function resizeCanvas(): void {
  const context = getCanvasContext();
  if (!context) return;
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

function createParticle(): ConfettiParticle {
  const context = getCanvasContext();
  if (!context) {
    throw new Error('Canvas not initialized');
  }

  const particle: ConfettiParticle = {
    x: Math.random() * context.canvas.width,
    y: Math.random() * -context.canvas.height * 0.3,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: Math.random() * 3 + 2,
    speedX: (Math.random() - 0.5) * 2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 5,
    opacity: 1,
    reset() {
      this.x = Math.random() * context.canvas.width;
      this.y = Math.random() * -context.canvas.height * 0.3;
      this.size = Math.random() * 8 + 4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedY = Math.random() * 3 + 2;
      this.speedX = (Math.random() - 0.5) * 2;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 5;
      this.opacity = 1;
    },
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotationSpeed;
      if (this.y > context.canvas.height) {
        this.opacity -= 0.02;
      }
    },
    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.7);
      ctx.restore();
    },
  };
  return particle;
}

function renderConfetti(): void {
  const context = getCanvasContext();
  if (!context) return;

  context.ctx.clearRect(0, 0, context.canvas.width, context.canvas.height);

  particles.forEach((p, index) => {
    p.update();
    p.draw(context.ctx);
    if (p.opacity <= 0) {
      particles.splice(index, 1);
    }
  });

  if (particles.length > 0) {
    animationFrameId = requestAnimationFrame(renderConfetti);
  } else {
    confettiActive = false;
    animationFrameId = null;
  }
}

export function burstConfetti(count = 90): void {
  const context = getCanvasContext();
  if (!context) {
    console.warn('Confetti canvas not found');
    return;
  }

  for (let i = 0; i < count; i++) {
    particles.push(createParticle());
  }

  if (!confettiActive) {
    confettiActive = true;
    renderConfetti();
  }
}

export function initConfetti(): void {
  const context = getCanvasContext();
  if (!context) return;

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

export function cleanupConfetti(): void {
  window.removeEventListener('resize', resizeCanvas);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  particles = [];
  confettiActive = false;
}