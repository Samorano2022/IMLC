import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { Scroll3dDirective } from '../core/scroll-3d.directive';
import { Tilt3dDirective } from '../core/tilt-3d.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, Scroll3dDirective, Tilt3dDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro section-pad perspective-stage" id="about">
      <div class="about-grid">
        <div
          class="about-content preserve-3d"
          appReveal
          [revealDelay]="140"
          appScroll3d
          [depth]="25"
          [rotateX]="3"
          [parallax]="0.04"
        >
          <p class="eyes-brow tone-white depth-z-10">ABOUT US</p>
          <h3 class="depth-z-20">
            MIV organizes interdenominational leadership conferences for Christian leaders in all
            spheres of influence including
            <span class="highlight"
              >government executives, captains of industries, religious leaders, traditional rulers,
              and emerging leaders to equip them for kingdom-minded leadership.</span
            >
          </h3>
        </div>
        <!-- <video
          class="intro-image preserve-3d"
          appReveal
          appScroll3d
          [depth]="65"
          [rotateX]="8"
          [parallax]="0.08"
          appTilt3d
          [maxTilt]="7"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          aria-label="A large gathering at a conference"
        >
          <source src="assets/aboutgiffy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
       <img class="intro-image preserve-3d"
  appReveal
  appScroll3d
  [depth]="65"
  [rotateX]="8"
  [parallax]="0.08"
  appTilt3d
  [maxTilt]="7"
  src="assets/aboutvid.gif"
  alt="About us animation"
  loading="eager"
/>
      </div>
    </section>
  `,
})
export class About { }
