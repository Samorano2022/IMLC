import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { NAV_LINKS } from '../core/data';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="site-header" [class.is-scrolled]="scrolled()">
      <a class="brand" href="#home" aria-label="IMLC home">
        <img src="assets/MIV-logo.png" alt="MIV Logo" />
      </a>
      <button
        class="menu-toggle"
        type="button"
        [attr.aria-label]="menuOpen() ? 'Close navigation' : 'Open navigation'"
        [attr.aria-expanded]="menuOpen()"
        (click)="menuOpen.set(!menuOpen())"
      >
        <span></span><span></span>
      </button>
      <nav class="main-nav" [class.is-open]="menuOpen()" aria-label="Main navigation">
        @for (link of links; track link.href) {
          <a [href]="link.href" (click)="menuOpen.set(false)">{{ link.label }}</a>
        }
        <a tartget="_blank"
          href="https://conference.menofissacharvision.com/events/imlc#register"
          class="button button-orange"
        >
          Register now
        </a>
      </nav>
    </header>
  `,
})
export class Header {
  private readonly ui = inject(UiService);
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected register(): void {
    this.menuOpen.set(false);
    this.ui.open('register');
  }
}
