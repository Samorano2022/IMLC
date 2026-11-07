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
          Leave your details and we'll share registration information when it becomes available.
        </p>
        <button class="button button-orange" type="button" (click)="ui.open('register')">
          Register now
        </button>
      </div>
    </section>
  `,
})
export class Closing {
  protected readonly ui = inject(UiService);
}
