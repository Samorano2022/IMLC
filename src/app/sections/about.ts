import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="intro section-pad" id="about">
      <div class="section-heading" appReveal>
        <div>
          <p class="eyebrow">ABOUT US</p>
          <h2>
            MIV organizes interdenominational leadership conferences for Christian leaders in all
            spheres of influence including government executives, captains of industries,
            religious leaders, traditional rulers, and emerging leaders to equip them for
            kingdom-minded leadership.
          </h2>
        </div>
      </div>
    </section>
  `,
})
export class About {}
