import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Speaker } from '../core/data';
// import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-speakers',
  // imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <section
      class="section-pad"
      [id]="sectionId()"
      [class.speakers]="tone() === 'sand'"
      [class.breakout-speakers]="tone() === 'white'"
    >
      <div class="section-heading" appReveal>
        <div>
          <h2>{{ heading() }}</h2>
        </div>
      </div>
      <div class="speaker-grid">
        @for (s of speakers(); track $index) {
          <article class="speaker-card" appReveal [revealDelay]="($index % 4) * 80">
            <div class="speaker-photo"><img [src]="s.image" alt="Conference speaker" /></div>
            <h3>{{ s.name }}</h3>
            <p>{{ s.role }}</p>
            <button type="button" (click)="view(s)">
              {{ s.profile ? 'View full profile' : 'View profile' }}
            </button>
          </article>
        }
      </div>
    </section> -->
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
