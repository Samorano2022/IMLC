import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { TESTIMONIALS, Testimonial } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      #sectionRef
      class="testimonials-section"
      id="testimonials"
      tabindex="0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Voices of Revival Testimonials Slider"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
      (focusin)="onFocusIn()"
      (focusout)="onFocusOut()"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
      (keydown)="onKeyDown($event)"
    >
      <!-- Atmospheric Backdrop Elements -->
      <div class="testimonials-bg" aria-hidden="true">
        <div class="glow-orb glow-orb-1"></div>
        <div class="glow-orb glow-orb-2"></div>
        <div class="bg-diagonal-grid"></div>
      </div>

      <div class="testimonials-container">
        <!-- Top Bar: Brand & Live Indicator -->
        <header class="testimonials-top-bar" appReveal>
          <div class="testimonials-brand">
            <span class="brand-logotype">
              TESTIMONIALS
            </span>
            <!-- <span class="brand-byline">by Men of Issachar Vision</span> -->
          </div>

          <!-- <div class="testimonials-counter-badge">
            <span class="counter-pulse-dot" [class.is-live]="isPlaying()"></span>
            <span class="counter-digits">
              <span class="counter-current">{{ formattedIndex() }}</span>
              <span class="counter-divider">/</span>
              <span class="counter-total">{{ formattedTotal() }}</span>
            </span>
            <span class="counter-tag">IMPACT STORIES</span>
          </div> -->
        </header>

        <!-- Main Grid: Left Content + Right Visual Composition -->
        <div class="testimonials-grid">
          <!-- Left Column: Testimonial Quote & Author Info -->
          <div class="testimonials-content">
            <!-- <div class="testimonial-category-pill" appReveal [revealDelay]="50">
              <span class="category-icon" aria-hidden="true">✦</span>
              <span>{{ current().category }}</span>
            </div> -->

            <!-- Animated Quote Text -->
            <div class="testimonial-quote-wrap">
              <blockquote
                class="testimonial-quote"
                [attr.key]="current().id"
                appReveal
                [revealDelay]="100"
              >
                “{{ current().quote }}”
              </blockquote>
            </div>

            <!-- <p class="testimonial-body" appReveal [revealDelay]="150">
              {{ current().body }}
            </p> -->

            <!-- Author & Ministry Meta Block -->
            <div class="testimonial-author-block" appReveal [revealDelay]="200">
              <div class="author-accent-line" aria-hidden="true"></div>
              <div class="author-meta">
                <h3 class="author-name">{{ current().author }}</h3>
                <p class="author-role-org">
                  <span class="author-role">{{ current().role }}</span>
                  <span class="meta-dot">·</span>
                  <span class="author-org">{{ current().organization }}</span>
                </p>
                <div class="author-badges">
                  <span class="author-badge">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      aria-hidden="true"
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {{ current().location }}
                  </span>
                  <!-- <span class="author-badge highlight">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.2"
                      aria-hidden="true"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      />
                    </svg>
                    {{ current().experience }}
                  </span> -->
                </div>
              </div>
            </div>

            <!-- Interactive Navigation Controls -->
            <div class="testimonials-controls" appReveal [revealDelay]="250">
              <div class="nav-buttons" role="group" aria-label="Slide controls">
                <button
                  type="button"
                  class="nav-btn btn-prev"
                  (click)="prev()"
                  aria-label="Previous testimonial"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  class="nav-btn btn-next"
                  (click)="next()"
                  aria-label="Next testimonial"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

              <!-- Pagination Indicators -->
              <div class="indicators-track" role="tablist" aria-label="Testimonials pagination">
                @for (item of items; track item.id; let idx = $index) {
                  <button
                    type="button"
                    role="tab"
                    class="indicator-item"
                    [class.is-active]="idx === currentIndex()"
                    [attr.aria-selected]="idx === currentIndex()"
                    [attr.aria-label]="'Go to testimonial ' + (idx + 1) + ' (' + item.author + ')'"
                    (click)="goTo(idx)"
                  >
                    <span class="indicator-fill"></span>
                  </button>
                }
              </div>

              <!-- Autoplay Toggle Button -->
              <button
                type="button"
                class="autoplay-btn"
                [class.is-paused]="!isPlaying()"
                (click)="togglePlay()"
                [attr.aria-label]="isPlaying() ? 'Pause autoplay' : 'Play slideshow'"
                [title]="isPlaying() ? 'Pause autoplay' : 'Resume autoplay'"
              >
                @if (isPlaying()) {
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1.5" />
                    <rect x="14" y="4" width="4" height="16" rx="1.5" />
                  </svg>
                } @else {
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                }
              </button>
            </div>
          </div>

          <!-- Right Column: Visual Centerpiece (Signature Diagonal Capsules & Portrait) -->
          <div class="testimonials-visual" appReveal [revealDelay]="120">
            <div class="visual-canvas">
              <!-- Backdrop Aura -->
              <div class="visual-aura" aria-hidden="true"></div>

              <!-- Back-Layer Diagonal Shapes (Layered behind the portrait) -->
              <div class="visual-pill pill-back-glass" aria-hidden="true"></div>
              <div class="visual-pill pill-back-wire-top" aria-hidden="true"></div>
              <div class="visual-pill pill-back-wire-right" aria-hidden="true"></div>
              <div class="visual-circle circle-accent-white" aria-hidden="true"></div>
              <div class="visual-circle circle-accent-neon" aria-hidden="true"></div>

              <!-- Center Portrait Frame -->
              <div class="portrait-stage">
                <img
                  [src]="current().image"
                  [alt]="current().imageAlt"
                  class="portrait-photo"
                  [class.is-changing]="isChanging()"
                  loading="eager"
                />
                <div class="portrait-soft-fade" aria-hidden="true"></div>
              </div>

              <!-- Front-Layer Diagonal Shapes (Layered overlapping the portrait) -->
              <!-- <div class="visual-pill pill-front-solid" aria-hidden="true">
                <div class="pill-gradient-stripe"></div>
              </div>
              <div class="visual-pill pill-front-wire" aria-hidden="true"></div> -->

              <!-- The Signature Floating Circular Date Badge (As seen in inspiration) -->
              <!-- <div class="floating-date-badge" aria-hidden="true">
                <div class="badge-ring">
                  <span class="badge-text">{{ current().badge }}</span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Live Autoplay Progress Line at Base -->
      <div class="carousel-progress-track" aria-hidden="true">
        <div
          class="carousel-progress-bar"
          [class.is-active]="isPlaying() && isIntersecting() && !isHovered()"
          [style.animationDuration.ms]="autoplayInterval"
        ></div>
      </div>
    </section>
  `,
})
export class Testimonials implements OnInit, OnDestroy {
  protected readonly items: Testimonial[] = TESTIMONIALS;
  protected readonly autoplayInterval = 6800; // 6.8 seconds per slide

  protected readonly currentIndex = signal(0);
  protected readonly isPlaying = signal(true);
  protected readonly isHovered = signal(false);
  protected readonly isIntersecting = signal(true);
  protected readonly isChanging = signal(false);

  private readonly sectionRef = viewChild<ElementRef<HTMLElement>>('sectionRef');

  private timerId?: ReturnType<typeof setInterval>;
  private changeTimeout?: ReturnType<typeof setTimeout>;
  private observer?: IntersectionObserver;
  private touchStartX = 0;
  private touchStartY = 0;
  private userPaused = false;

  protected readonly current = computed(() => this.items[this.currentIndex()]);
  protected readonly totalCount = computed(() => this.items.length);
  protected readonly formattedIndex = computed(() =>
    String(this.currentIndex() + 1).padStart(2, '0'),
  );
  protected readonly formattedTotal = computed(() =>
    String(this.totalCount()).padStart(2, '0'),
  );

  ngOnInit(): void {
    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        this.isPlaying.set(false);
        this.userPaused = true;
      }
    }

    this.startAutoplay();
    this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.observer?.disconnect();
    if (this.changeTimeout) {
      clearTimeout(this.changeTimeout);
    }
  }

  protected next(): void {
    const nextIdx = (this.currentIndex() + 1) % this.items.length;
    this.setActiveIndex(nextIdx);
  }

  protected prev(): void {
    const prevIdx = (this.currentIndex() - 1 + this.items.length) % this.items.length;
    this.setActiveIndex(prevIdx);
  }

  protected goTo(index: number): void {
    if (index === this.currentIndex()) return;
    this.setActiveIndex(index);
  }

  protected togglePlay(): void {
    const newState = !this.isPlaying();
    this.isPlaying.set(newState);
    this.userPaused = !newState;

    if (newState) {
      this.resetAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  protected onMouseEnter(): void {
    this.isHovered.set(true);
  }

  protected onMouseLeave(): void {
    this.isHovered.set(false);
  }

  protected onFocusIn(): void {
    this.isHovered.set(true);
  }

  protected onFocusOut(): void {
    this.isHovered.set(false);
  }

  protected onTouchStart(event: TouchEvent): void {
    if (event.touches.length === 1) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      this.isHovered.set(true);
    }
  }

  protected onTouchEnd(event: TouchEvent): void {
    this.isHovered.set(false);
    if (event.changedTouches.length === 1) {
      const deltaX = event.changedTouches[0].clientX - this.touchStartX;
      const deltaY = event.changedTouches[0].clientY - this.touchStartY;

      // Ensure horizontal swipe is dominant and exceeds threshold
      if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
        if (deltaX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }
  }

  protected onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      this.goTo(this.items.length - 1);
    }
  }

  private setActiveIndex(index: number): void {
    this.isChanging.set(true);
    if (this.changeTimeout) clearTimeout(this.changeTimeout);

    this.currentIndex.set(index);

    this.changeTimeout = setTimeout(() => {
      this.isChanging.set(false);
    }, 450);

    // Reset autoplay timer on manual slide changes
    if (this.isPlaying() && !this.userPaused) {
      this.resetAutoplay();
    }
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    if (!this.isPlaying()) return;

    this.timerId = setInterval(() => {
      if (this.isPlaying() && this.isIntersecting() && !this.isHovered()) {
        this.next();
      }
    }, this.autoplayInterval);
  }

  private stopAutoplay(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  private initIntersectionObserver(): void {
    const el = this.sectionRef()?.nativeElement;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        this.isIntersecting.set(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    this.observer.observe(el);
  }
}
