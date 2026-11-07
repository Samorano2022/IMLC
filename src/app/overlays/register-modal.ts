import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UiService } from '../core/ui.service';

const DEFAULT_ROLE = 'Minister / Pastor';

@Component({
  selector: 'app-register-modal',
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="modal"
      [class.is-open]="open()"
      [attr.aria-hidden]="!open()"
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-title"
      (click)="onBackdrop($event)"
    >
      <div class="modal-panel" #panel>
        <button class="modal-close" type="button" aria-label="Close dialog" (click)="ui.close()">×</button>
        <p class="eyebrow">BE PART OF THE GATHERING</p>
        <h2 id="register-title">Your place starts here.</h2>
        <p>
          Leave your details and we'll share registration information when it becomes available.
        </p>
        <form #form="ngForm" (ngSubmit)="submit(form)">
          <label>
            Full name
            <input required name="name" placeholder="Your full name" [(ngModel)]="model.name" />
          </label>
          <label>
            Email address
            <input
              required
              type="email"
              name="email"
              placeholder="you&#64;example.com"
              [(ngModel)]="model.email"
            />
          </label>
          <label>
            I'm attending as
            <select name="role" [(ngModel)]="model.role">
              <option>Minister / Pastor</option>
              <option>Church leader</option>
              <option>Ministry team member</option>
              <option>Guest</option>
            </select>
          </label>
          <button class="button button-orange" type="submit">Send my interest ↗</button>
          <p class="form-message" aria-live="polite">{{ message() }}</p>
        </form>
      </div>
    </div>
  `,
})
export class RegisterModal {
  protected readonly ui = inject(UiService);
  protected readonly open = computed(() => this.ui.activeModal() === 'register');
  protected readonly message = signal('');
  protected model = { name: '', email: '', role: DEFAULT_ROLE };

  private readonly panel = viewChild.required<ElementRef<HTMLElement>>('panel');

  constructor() {
    effect(() => {
      if (this.open()) {
        setTimeout(() => this.panel().nativeElement.querySelector('input')?.focus(), 0);
      }
    });
  }

  protected onBackdrop(e: MouseEvent): void {
    if (e.target === e.currentTarget) this.ui.close();
  }

  protected submit(form: NgForm): void {
    if (form.invalid) return;
    const name = this.model.name.trim();
    this.message.set(`Thank you, ${name}. Your interest has been noted in this demo.`);
    form.resetForm({ name: '', email: '', role: DEFAULT_ROLE });
  }
}
