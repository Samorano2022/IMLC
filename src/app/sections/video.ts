import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-video',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <section class="video-section section-pad">
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
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/D619X7uv6vw"
          title="Men of Issachar Conference Highlights"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
        </iframe>
      </div>
    </section> -->
    <section class="video-section section-pad">
      <div class="section-heading" appReveal>
        <div>
          <p class="eyebrow">LAST YEAR EXPERIENCE</p>
          <h2>REVISIT THE EXPERIENCE</h2>
        </div>

        <p class="side-note">
          A moment from the gathering.<br />
          Let the message move you again.
        </p>
      </div>

      <!-- <div class="video-grid">
      
        <div class="video-card" appReveal [revealDelay]="100">
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/S4u9EgkEMOs"
              title="Men of Issachar Conference Highlights"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>
          <div class="video-info">
            <span class="video-category">CONFERENCE HIGHLIGHTS</span>
            <h3>Moments from the Gathering</h3>
          </div>
        </div>


        <div class="video-card" appReveal [revealDelay]="200">
          <div class="video-frame">
            <iframe
              src="hhttps://www.youtube.com/embed/OpKWOzz0Ekg"
              title="Men of Issachar Conference Session"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>
          <div class="video-info">
            <span class="video-category">TEACHINGS</span>
            <h3>Messages That Transform</h3>
          </div>
        </div>


        <div class="video-card" appReveal [revealDelay]="300">
          <div class="video-frame">
            <iframe
              src="https://www.youtube.com/embed/5LzTK3p1SHE"
              title="Men of Issachar Worship Moments"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>
          <div class="video-info">
            <span class="video-category">WORSHIP & FELLOWSHIP</span>
            <h3>Moments of Worship</h3>
          </div>
        </div>
      </div> -->
      <div class="video-grid">
        <!-- Video 1 -->
        <div class="video-card" appReveal [revealDelay]="100">
          <a
            href="https://www.youtube.com/watch?v=S4u9EgkEMOs"
            target="_blank"
            rel="noopener noreferrer"
            class="video-link"
            aria-label="Watch Moments from the Gathering"
          >
            <div class="video-frame">
              <iframe
                src="https://www.youtube.com/embed/D619X7uv6vw"
                title="Men of Issachar Conference Highlights"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <span class="video-category">CONFERENCE HIGHLIGHTS</span>
              <h3>Moments from the Gathering</h3>
              <span class="watch-video">Watch video ↗</span>
            </div>
          </a>
        </div>

        <!-- Video 2 -->
        <div class="video-card" appReveal [revealDelay]="200">
          <a
            href="https://www.youtube.com/watch?v=OpKWOzz0Ekg"
            target="_blank"
            rel="noopener noreferrer"
            class="video-link"
            aria-label="Watch Messages That Transform"
          >
            <div class="video-frame">
              <iframe
                src="https://www.youtube.com/embed/OpKWOzz0Ekg"
                title="Men of Issachar Conference Session"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <span class="video-category">TEACHINGS</span>
              <h3>Messages That Transform</h3>
              <span class="watch-video">Watch video ↗</span>
            </div>
          </a>
        </div>

        <!-- Video 3 -->
        <div class="video-card" appReveal [revealDelay]="300">
          <a
            href="https://www.youtube.com/watch?v=5LzTK3p1SHE"
            target="_blank"
            rel="noopener noreferrer"
            class="video-link"
            aria-label="Watch Moments of Worship"
          >
            <div class="video-frame">
              <iframe
                src="https://www.youtube.com/embed/5LzTK3p1SHE"
                title="Men of Issachar Worship Moments"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <span class="video-category">WORSHIP & FELLOWSHIP</span>
              <h3>Moments of Worship</h3>
              <span class="watch-video">Watch video ↗</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Video {
  protected readonly ui = inject(UiService);
}
