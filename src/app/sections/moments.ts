import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChildren,
} from '@angular/core';
import { GALLERY_ROWS } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';
import { Scroll3dDirective } from '../core/scroll-3d.directive';
import { Tilt3dDirective } from '../core/tilt-3d.directive';

@Component({
  selector: 'app-moments',
  imports: [RevealDirective, Scroll3dDirective, Tilt3dDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="moments section-pad perspective-stage" id="moments">
      <div class="section-heading" appReveal>
        <div>
          <h2>
            Moments That Draw Us Closer to God.
          </h2>
          <p class="muted-light">
            Relive moments of worship, spiritual growth, and life-changing fellowship.
          </p>
        </div>
        <div class="gallery-controls">
          <button
            class="gallery-prev"
            type="button"
            aria-label="Previous images"
            (click)="scroll(-1)"
          >
            ←
          </button>
          <button class="gallery-next" type="button" aria-label="Next images" (click)="scroll(1)">
            →
          </button>
        </div>
      </div>

      @for (row of rows; track $index) {
        <div
          #galleryRow
          class="gallery-track preserve-3d"
          appReveal
          [revealDelay]="$index * 120"
          appScroll3d
          [depth]="45"
          [rotateX]="6"
          [parallax]="0.06"
          (scroll)="$index === 0 && onScroll(galleryRow)"
        >
          @for (img of row; track $index) {
            <img [src]="img.src" [alt]="img.alt" loading="lazy" appTilt3d [maxTilt]="8" [scale]="1.04" />
          }
        </div>
      }

      <div class="gallery-progress"><span [style.width.%]="progress()"></span></div>
    </section>
  `,
})
export class Moments {
  protected readonly rows = GALLERY_ROWS;
  protected readonly progress = signal(28);
  private readonly tracks = viewChildren<ElementRef<HTMLElement>>('galleryRow');

  /** Moves every row together so the two galleries stay in step. */
  protected scroll(direction: 1 | -1): void {
    for (const t of this.tracks()) {
      const el = t.nativeElement;
      el.scrollBy({ left: direction * el.clientWidth * 0.75, behavior: 'smooth' });
    }
  }

  protected onScroll(track: HTMLElement): void {
    const max = track.scrollWidth - track.clientWidth;
    this.progress.set(max ? 28 + (track.scrollLeft / max) * 72 : 100);
  }
}
