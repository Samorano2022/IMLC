import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WHY_ITEMS } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-why',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="programme section-pad" id="programme">
      <div class="programme-copy" appReveal>
        <h2>Why You Should Be <br />Part of IMLC</h2>
        <p>
          More than a conference, IMLC is an opportunity to grow in spiritual understanding, sharpen
          your leadership capacity, and connect with people whose influence extends across different
          spheres of society.
        </p>
        <a
          href="https://conference.menofissacharvision.com/events/imlc#register"
          class="button button-dark"
          type="button"
        >
          Explore the gathering
        </a>
      </div>
      <div class="programme-list">
        <p class="eyebrow">WHAT TO EXPECT</p>
        @for (item of items; track item.number) {
          <div appReveal [revealDelay]="$index * 110">
            <b>{{ item.number }}</b>
            <span>
              <strong>{{ item.title }}</strong>
              <small>{{ item.body }}</small>
            </span>
          </div>
        }
      </div>
    </section>
  `,
})
export class Why {
  protected readonly ui = inject(UiService);
  protected readonly items = WHY_ITEMS;
}
