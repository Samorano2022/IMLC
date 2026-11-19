import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Speaker } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';
import { Scroll3dDirective } from '../core/scroll-3d.directive';
import { Tilt3dDirective } from '../core/tilt-3d.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-speakers',
  imports: [RevealDirective, Scroll3dDirective, Tilt3dDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="speakers-section section-pad"
      [id]="sectionId()"
      [class.tone-sand]="tone() === 'sand'"
      [class.tone-white]="tone() === 'white'"
      [class.speakers]="tone() === 'sand'"
      [class.breakout-speakers]="tone() === 'white'"
    >
      <div class="section-heading" appReveal>
        <div>
          <p class="eyebrow">
            {{ tone() === 'sand' ? 'THE VOICES BEHIND THE MESSAGE' : 'BREAKOUT SESSIONS' }}
          </p>
          <h2>{{ heading() }}</h2>
        </div>

        <p class="side-note">
          {{
            tone() === 'sand'
              ? 'Meet the voices entrusted with the Word. Prepare to be inspired, equipped and transformed.'
              : 'Practical ministry tracks and deep-dive sessions with seasoned Christian leaders.'
          }}
        </p>
      </div>

      <div class="speaker-grid perspective-stage">
        @for (s of speakers(); track $index) {
          <article
            class="speaker-card preserve-3d"
            appReveal
            [revealDelay]="($index % 3) * 60"
            appScroll3d
            [depth]="38"
            [rotateX]="6"
            [parallax]="0.05"
            appTilt3d
            [maxTilt]="9"
          >
            <div class="speaker-photo preserve-3d">
              <img [src]="s.image" [alt]="s.name" loading="lazy" />

              <div class="speaker-overlay depth-z-30">
                <!-- <button
                  type="button"
                  class="speaker-btn"
                  (click)="view(s)"
                  [attr.aria-label]="'View profile of ' + s.name"
                >
                  <span>{{ s.profile ? 'View profile' : 'Profile' }}</span>
                  <span class="btn-arrow" aria-hidden="true">↗</span>
                </button> -->
              </div>
            </div>

            <div class="speaker-info depth-z-20">
              <div class="speaker-main">
                <h3 class="speaker-name">{{ s.name }}</h3>
                <p class="speaker-role">{{ s.role }}</p>
              </div>
              @if (s.tag) {
                <span class="speaker-tag">{{ s.tag }}</span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class Speakers {
  readonly heading = input.required<string>();
  readonly speakers = input.required<Speaker[]>();
  readonly tone = input<'sand' | 'white'>('sand');
  readonly sectionId = input<string>();

  private readonly ui = inject(UiService);

  protected view(s: Speaker): void {
    if (s.profile) {
      this.ui.open('profile');
    } else {
      this.ui.toast(`${s.tag} profile details will be announced soon.`);
    }
  }
}
