import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAQS } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';

@Component({
  selector: 'app-faq',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="faq section-pad" id="faq">
      <div appReveal>
        <p class="eyebrow">Before you join us.</p>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>Everything you need to prepare for the gathering.</p>
      </div>
      <div class="faq-list" appReveal [revealDelay]="120">
        @for (f of faqs; track f.question) {
          <details [open]="$first">
            <summary>{{ f.question }}</summary>
            <p>{{ f.answer }}</p>
          </details>
        }
      </div>
    </section>
  `,
})
export class Faq {
  protected readonly faqs = FAQS;
}
