import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-video-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="modal"
      [class.is-open]="open()"
      [attr.aria-hidden]="!open()"
      role="dialog"
      aria-modal="true"
      aria-label="Conference highlight video"
      (click)="onBackdrop($event)"
    >
      <div class="modal-panel video-modal-panel">
        <button class="modal-close" type="button" aria-label="Close dialog" (click)="ui.close()">×</button>
        <div class="video-placeholder">
          <span class="play-button">▶</span>
          <p>Conference highlight video</p>
          <small>Add your official video embed or URL here.</small>
        </div>
      </div>
    </div>
  `,
})
export class VideoModal {
  protected readonly ui = inject(UiService);
  protected readonly open = computed(() => this.ui.activeModal() === 'video');

  protected onBackdrop(e: MouseEvent): void {
    if (e.target === e.currentTarget) this.ui.close();
  }
}
