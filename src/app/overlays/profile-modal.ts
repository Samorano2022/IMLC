import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { SAMSON_PROFILE } from '../core/data';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-profile-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="modal profile-modal"
      [class.is-open]="open()"
      [attr.aria-hidden]="!open()"
      role="dialog"
      aria-modal="true"
      aria-labelledby="samson-profile-title"
      (click)="onBackdrop($event)"
    >
      <article class="profile-panel">
        <button
          class="profile-close"
          type="button"
          aria-label="Close speaker profile"
          (click)="ui.close()"
        >
          ×
        </button>
        <div class="profile-left">
          <img class="profile-photo" [src]="p.photo" [alt]="p.name" />
          <div class="profile-quote">
            <p>One faith.<br />A higher calling.</p>
            <small>IMLC / THE LEADERSHIP GATHERING</small>
          </div>
        </div>
        <div class="profile-right">
          <p class="eyebrow">HOST / IMLC 2027</p>
          <h2 id="samson-profile-title">{{ p.name }}</h2>
          <h3>{{ p.title }}</h3>
          <p class="profile-org">{{ p.org }}</p>
          <div class="profile-rule"></div>
          <p class="eyebrow">ABOUT THE SPEAKER</p>
          <p class="profile-bio">{{ p.bio }}</p>
          <div class="profile-note">
            From the 2027 gathering.<br />The 2027 speaker lineup is to be announced.
          </div>
          <button class="back-speakers" type="button" (click)="ui.close()">
            ← Back to all speakers
          </button>
        </div>
      </article>
    </div>
  `,
})
export class ProfileModal {
  protected readonly ui = inject(UiService);
  protected readonly p = SAMSON_PROFILE;
  protected readonly open = computed(() => this.ui.activeModal() === 'profile');

  protected onBackdrop(e: MouseEvent): void {
    if (e.target === e.currentTarget) this.ui.close();
  }
}
