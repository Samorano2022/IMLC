import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-closing',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="closing section-pad" id="join">
      <div class="closing-inner" appReveal>
        <p class="eyebrow light">BE PART OF THE GATHERING</p>
        <h2>Your place starts here.</h2>
        <p>
          Register your interest in IMLC by providing your details and completing the registration
          form to secure your place at the conference.
        </p>
        <a
          target="_blank"
          href="https://conference.menofissacharvision.com/events/imlc#register"
          class="button button-orange"
        >
          Register now
        </a>
      </div>
    </section>
  `,
})
export class Closing {
  protected readonly ui = inject(UiService);
}
