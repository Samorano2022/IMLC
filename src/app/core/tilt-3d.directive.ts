import {
  Directive,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';

/**
 * Modern Interactive 3D Tilt Directive
 * Gives cards and interactive elements authentic 3D physics on mouse hover/pointermove,
 * with specular dynamic glare and multi-plane depth layering for children.
 */
@Directive({
  selector: '[appTilt3d]',
})
export class Tilt3dDirective implements OnInit, OnDestroy {
  /** Maximum tilt angle in degrees (default: 8) */
  readonly maxTilt = input<number>(8);
  /** Perspective distance in px (default: 1000) */
  readonly perspective = input<number>(1000);
  /** Scale on hover (default: 1.025) */
  readonly scale = input<number>(1.025);
  /** Whether to show dynamic specular light glare (default: true) */
  readonly glare = input<boolean>(true);
  /** Maximum opacity of the glare highlight (default: 0.25) */
  readonly maxGlare = input<number>(0.25);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private glareEl: HTMLElement | null = null;
  private isHovered = false;
  private isReducedMotion = false;
  private rafId: number | null = null;

  private targetRotX = 0;
  private targetRotY = 0;
  private currentRotX = 0;
  private currentRotY = 0;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    if (this.isReducedMotion) return;

    const node = this.el;
    node.style.transformStyle = 'preserve-3d';
    node.style.willChange = 'transform';
    node.classList.add('tilt-3d-target');

    if (this.glare()) {
      this.setupGlare();
    }
  }

  private setupGlare(): void {
    if (this.glareEl) return;
    const glare = document.createElement('div');
    glare.className = 'tilt-3d-glare';
    glare.style.position = 'absolute';
    glare.style.top = '0';
    glare.style.left = '0';
    glare.style.width = '100%';
    glare.style.height = '100%';
    glare.style.pointerEvents = 'none';
    glare.style.borderRadius = 'inherit';
    glare.style.zIndex = '5';
    glare.style.opacity = '0';
    glare.style.transition = 'opacity 0.25s ease';
    glare.style.mixBlendMode = 'overlay';

    // Ensure parent can position absolute children without overflow escape
    if (getComputedStyle(this.el).position === 'static') {
      this.el.style.position = 'relative';
    }

    this.el.appendChild(glare);
    this.glareEl = glare;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.isReducedMotion) return;
    this.isHovered = true;
    this.el.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
    if (this.glareEl) {
      this.glareEl.style.opacity = '1';
    }
    this.startLoop();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.isReducedMotion || !this.isHovered) return;
    const rect = this.el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Normalised coordinate: -0.5 (left/top) to +0.5 (right/bottom)
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    // Invert Y for correct natural pitch
    this.targetRotX = -yPct * this.maxTilt() * 2;
    this.targetRotY = xPct * this.maxTilt() * 2;

    if (this.glareEl) {
      const gx = ((xPct + 0.5) * 100).toFixed(1);
      const gy = ((yPct + 0.5) * 100).toFixed(1);
      this.glareEl.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, ${this.maxGlare()}) 0%, transparent 70%)`;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.isReducedMotion) return;
    this.isHovered = false;
    this.targetRotX = 0;
    this.targetRotY = 0;

    if (this.glareEl) {
      this.glareEl.style.opacity = '0';
    }

    // Smooth spring return to rest
    this.el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease';
    this.el.style.transform = `perspective(${this.perspective()}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private startLoop(): void {
    if (this.rafId === null) {
      this.ngZone.runOutsideAngular(() => {
        this.rafId = requestAnimationFrame(this.tick);
      });
    }
  }

  private tick = (): void => {
    if (!this.isHovered) return;

    const ease = 0.15;
    this.currentRotX += (this.targetRotX - this.currentRotX) * ease;
    this.currentRotY += (this.targetRotY - this.currentRotY) * ease;

    const rx = this.currentRotX.toFixed(2);
    const ry = this.currentRotY.toFixed(2);
    const s = this.scale();

    this.el.style.transform = `perspective(${this.perspective()}px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${s}, ${s}, ${s})`;

    this.rafId = requestAnimationFrame(this.tick);
  };

  ngOnDestroy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.glareEl && this.glareEl.parentNode) {
      this.glareEl.parentNode.removeChild(this.glareEl);
    }
    this.el.style.transform = '';
  }
}
