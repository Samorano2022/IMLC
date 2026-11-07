import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toast" [class.show]="ui.toastVisible()" role="status" aria-live="polite">
      {{ ui.toastMessage() }}
    </div>
  `,
})
export class Toast {
  protected readonly ui = inject(UiService);
}
