import { Injectable, effect, signal } from '@angular/core';

export type ModalId = 'register' | 'video' | 'profile';

@Injectable({ providedIn: 'root' })
export class UiService {
  readonly activeModal = signal<ModalId | null>(null);
  readonly toastMessage = signal('');
  readonly toastVisible = signal(false);

  private toastTimer?: ReturnType<typeof setTimeout>;
  private lastFocus: HTMLElement | null = null;

  constructor() {
    // Lock page scroll while a dialog is open.
    effect(() => {
      document.body.style.overflow = this.activeModal() ? 'hidden' : '';
    });
  }

  open(id: ModalId): void {
    this.lastFocus = document.activeElement as HTMLElement | null;
    this.activeModal.set(id);
  }

  close(): void {
    if (!this.activeModal()) return;
    this.activeModal.set(null);
    this.lastFocus?.focus();
    this.lastFocus = null;
  }

  toast(message: string): void {
    this.toastMessage.set(message);
    this.toastVisible.set(true);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastVisible.set(false), 2600);
  }
}
