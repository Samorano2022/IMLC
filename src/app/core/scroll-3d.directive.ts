import {
  Directive,
  ElementRef,
  Injectable,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
  input,
} from '@angular/core';

/**
 * Shared, RAF-driven scroll manager that coordinates all 3D scroll elements
 * in a single high-performance loop without layout thrashing.
 */
@Injectable({ providedIn: 'root' })
export class Scroll3dManager {
  private readonly ngZone = inject(NgZone);
  private readonly registered = new Set<Scroll3dDirective>();
  private rafId: number | null = null;
  private isListening = false;
  private viewportHeight = 0;
  private isReducedMotion = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.viewportHeight = window.innerHeight;
      this.isReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }

  register(directive: Scroll3dDirective): void {
    if (this.isReducedMotion) return;
    this.registered.add(directive);
    this.ensureListening();
  }

  unregister(directive: Scroll3dDirective): void {
    this.registered.delete(directive);
    if (this.registered.size === 0) {
      this.stopListening();
    }
  }

  private ensureListening(): void {
    if (this.isListening || typeof window === 'undefined') return;
    this.isListening = true;

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
      this.startLoop();
    });
  }

  private stopListening(): void {
    if (!this.isListening || typeof window === 'undefined') return;
    this.isListening = false;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private onScroll = (): void => {
    if (this.rafId === null) {
      this.startLoop();
    }
  };

  private onResize = (): void => {
    this.viewportHeight = window.innerHeight;
  };

  private startLoop(): void {
    this.rafId = requestAnimationFrame(this.tick);
  }

  private tick = (): void => {
    let hasActiveElements = false;
    const vh = this.viewportHeight || 800;

    for (const item of this.registered) {
      if (item.isVisible) {
        hasActiveElements = true;
        item.update(vh);
      }
    }

    // Keep loop active while elements are interpolating or user may be scrolling
    if (hasActiveElements && this.registered.size > 0) {
      this.rafId = requestAnimationFrame(this.tick);
    } else {
      this.rafId = null;
    }
  };
}

/**
 * Modern 3D Scroll Directive
 * Gives elements real physical perspective and depth on scroll.
 * 
 * As an element enters the viewport, it smoothly pitches and floats in 3D coordinate space,
 * levels out perfectly at viewport center, and gently glides with perspective as you scroll.
 */
@Directive({
  selector: '[appScroll3d]',
})
export class Scroll3dDirective implements OnInit, OnDestroy {
  /** Maximum rotation pitch in degrees (default: 8) */
  readonly rotateX = input<number>(8);
  /** Maximum rotation yaw in degrees (default: 0) */
  readonly rotateY = input<number>(0);
  /** Maximum Z-depth translation in px (default: 50) */
  readonly depth = input<number>(50);
  /** Parallax Y translation factor (default: 0.08) */
  readonly parallax = input<number>(0.08);
  /** 3D Perspective in px (default: 1200) */
  readonly perspective = input<number>(1200);

  isVisible = false;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly manager = inject(Scroll3dManager);
  private observer?: IntersectionObserver;

  // Smoothed interpolation states
  private currentRotX = 0;
  private currentRotY = 0;
  private currentTransZ = 0;
  private currentTransY = 0;

  ngOnInit(): void {
    const node = this.el;
    node.style.transformStyle = 'preserve-3d';
    node.style.willChange = 'transform';

    if (typeof IntersectionObserver === 'undefined') {
      this.isVisible = true;
      this.manager.register(this);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((e) => e.isIntersecting);
        this.isVisible = isIntersecting;
        if (isIntersecting) {
          this.manager.register(this);
        } else {
          this.manager.unregister(this);
        }
      },
      { rootMargin: '30% 0px 30% 0px', threshold: 0 },
    );

    this.observer.observe(node);
  }

  update(viewportHeight: number): void {
    const rect = this.el.getBoundingClientRect();
    const elemCenterY = rect.top + rect.height * 0.5;
    const viewportCenterY = viewportHeight * 0.5;

    // Normalized progress: -1 (top of screen), 0 (center), +1 (bottom of screen)
    const rawProgress = (elemCenterY - viewportCenterY) / (viewportHeight * 0.5);
    const progress = Math.max(-1.4, Math.min(1.4, rawProgress));

    // Target 3D coordinates based on progress
    const targetRotX = progress * this.rotateX();
    const targetRotY = progress * this.rotateY();
    // Negative Z: recedes slightly into the screen when off-center
    const targetTransZ = -Math.abs(progress) * this.depth();
    const targetTransY = progress * (this.parallax() * 100);

    // Damped interpolation (lerp) for silky 60-120fps motion
    const ease = 0.12;
    this.currentRotX += (targetRotX - this.currentRotX) * ease;
    this.currentRotY += (targetRotY - this.currentRotY) * ease;
    this.currentTransZ += (targetTransZ - this.currentTransZ) * ease;
    this.currentTransY += (targetTransY - this.currentTransY) * ease;

    const rx = this.currentRotX.toFixed(2);
    const ry = this.currentRotY.toFixed(2);
    const tz = this.currentTransZ.toFixed(1);
    const ty = this.currentTransY.toFixed(1);

    this.el.style.transform = `perspective(${this.perspective()}px) translate3d(0, ${ty}px, ${tz}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.manager.unregister(this);
    this.el.style.transform = '';
  }
}
