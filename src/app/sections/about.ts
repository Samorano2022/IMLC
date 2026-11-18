import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <section class="intro section-pad" id="about">
      <div class="section-heading" appReveal>
        <div>
          <p class="eyebrow">ABOUT US</p>
          <h2>
            MIV organizes interdenominational leadership conferences for Christian leaders in all
            spheres of influence including government executives, captains of industries, religious
            leaders, traditional rulers, and emerging leaders to equip them for kingdom-minded
            leadership.
          </h2>
        </div>
        <div class="intro-gri">
          <img
            class="intro-image"
            appReveal
            src="assets/auditorium-backview.jpg"
            alt="A large gathering at a conference"
          />
        
        </div>

        <div class="intro-gri">
          <img
            class="intro-image"
            appReveal
            src="assets/auditorium-backview.jpg"
            alt="A large gathering at a conference"
          />
        </div>

        <div class="intro-gri">
          <img
            class="intro-image"
            appReveal
            src="assets/auditorium-backview.jpg"
            alt="A large gathering at a conference"
          />
        </div>
      </div>
    </section> -->
    <section class="intro section-pad" id="about">
      <div class="about-grid">
        <div class="about-content" appReveal [revealDelay]="140">
          <p class="eyes-brow tone-white">ABOUT US</p>
          <h3>
            MIV organizes interdenominational leadership conferences for Christian leaders in all
            spheres of influence including
            <span class="highlight"
              >government executives, captains of industries, religious leaders, traditional rulers,
              and emerging leaders to equip them for kingdom-minded leadership.</span
            >
          </h3>
        </div>
        <video
          class="intro-image"
          appReveal
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          aria-label="A large gathering at a conference"
        >
          <source src="assets/aboutgiffy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  `,
})
export class About {}
