import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { Scroll3dDirective } from '../core/scroll-3d.directive';
import { Tilt3dDirective } from '../core/tilt-3d.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective, Scroll3dDirective, Tilt3dDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero perspective-stage" id="home">
      <!-- Ambient 3D Rotating Rings -->
      <div class="hero-3d-ambient" aria-hidden="true">
        <div class="hero-3d-ring hero-3d-ring-1"></div>
        <div class="hero-3d-ring hero-3d-ring-2"></div>
      </div>

      <div class="hero-text" appScroll3d [depth]="25" [rotateX]="3" [parallax]="0.04">
        <img class="hero-theme depth-z-20" src="assets/theme.png" alt="Revivals" />
        <p class="hero-sub depth-z-10">37TH INTERNATIONAL MINISTERS/LEADERSHIP CONFERENCE</p>
        <p class="hero-copy depth-z-10">20th — 24th Jan, 2027 | Time: 9.00am &amp; 5.00pm Daily</p>
        <a
          target="_blank"
          href="https://conference.menofissacharvision.com/events/imlc#register"
          class="button button-orange depth-z-20"
        >
          Register now
        </a>
      </div>
      <div
        class="hero-portrait preserve-3d"
        appScroll3d
        [depth]="65"
        [rotateX]="7"
        [parallax]="0.1"
        appTilt3d
        [maxTilt]="7"
      >
        <img
          loading="lazy"
          src="assets/daddy-mummy.jpeg"
          alt="Co-Hosts: Rev. Samson & Rev. Mrs. Stella Ajetomobi"
        />
        <div class="portrait-accent"></div>
      </div>

      <div
        class="hero-stats preserve-3d"
        appReveal
        [revealDelay]="200"
        appScroll3d
        [depth]="30"
        [rotateX]="4"
        [parallax]="0.06"
      >
        <div class="depth-z-10">
          <strong>5</strong>
          <span>Days of gathering<br />Jan 20th – 24th</span>
        </div>
        <div class="depth-z-20">
          <strong>2×</strong>
          <span>Sessions daily<br />9.00am &amp; 5.00pm</span>
        </div>
        <div class="depth-z-10">
          <strong>37th</strong>
          <span>International Ministers /<br />Leadership Conference</span>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly ui = inject(UiService);
}
