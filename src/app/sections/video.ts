import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-video',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="video-section section-pad">
      <div class="section-heading" appReveal>
        <div>
          <p class="eyebrow">REVISIT THE EXPERIENCE</p>
          <h2>You had to be there.<br />Now you can be.</h2>
        </div>
        <p class="side-note">
          A moment from the gathering.<br />
          Let the message move you again.
        </p>
      </div>
      <div
        class="video-card"
        appReveal
        [revealDelay]="120"
        aria-label="Men of Issachar conference highlights"
      >
        <iframe
          src="https://www.youtube.com/watch?v=D619X7uv6vw"
          title="Men of Issachar Conference Highlights"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  `,
})
export class Video {
  protected readonly ui = inject(UiService);
}
