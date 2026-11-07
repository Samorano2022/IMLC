import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';

@Component({
  selector: 'app-purpose',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro section-pad" id="purpose">
      <div class="intro-grid">
        <img
          class="intro-image"
          appReveal
          src="assets/auditorium-backview.jpg"
          alt="A large gathering at a conference"
        />
        <div class="intro-content" appReveal [revealDelay]="140">
          <h3>Equipping Leaders. Advancing Kingdom Influence. Transforming Nations.</h3>
          <ul class="check-list">
            <li>Christ-centred teaching and worship</li>
            <li>Practical leadership insight for today</li>
            <li>Meaningful connections and shared experience</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class Purpose {}
