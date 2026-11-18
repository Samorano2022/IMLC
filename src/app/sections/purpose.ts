import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { Scroll3dDirective } from '../core/scroll-3d.directive';
import { Tilt3dDirective } from '../core/tilt-3d.directive';

@Component({
  selector: 'app-purpose',
  imports: [RevealDirective, Scroll3dDirective, Tilt3dDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intr section-pad perspective-stage" id="purpose">
      <div class="intro-grid">
        <img
          class="intro-imaged preserve-3d"
          appReveal
          appScroll3d
          [depth]="60"
          [rotateX]="7"
          [parallax]="0.07"
          appTilt3d
          [maxTilt]="7"
          src="assets/auditorium-backview.jpg"
          alt="A large gathering at a conference"
        />
        <div
          class="intro-content preserve-3d"
          appReveal
          [revealDelay]="140"
          appScroll3d
          [depth]="25"
          [rotateX]="3"
          [parallax]="0.04"
        >
          <h3 class="depth-z-20">Equipping Leaders. Advancing Kingdom Influence. Transforming Nations.</h3>
          <ul class="check-list depth-z-10">
            <li>Christ-centred teaching and worship</li>
            <li>Practical leadership insight for today</li>
            <li>Meaningful connections and shared experience</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Purpose { }
