import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { SPEAKERS } from './core/data';
import { UiService } from './core/ui.service';
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { ProfileModal } from './overlays/profile-modal';
import { RegisterModal } from './overlays/register-modal';
import { Toast } from './overlays/toast';
import { VideoModal } from './overlays/video-modal';
import { About } from './sections/about';
import { Closing } from './sections/closing';
import { Faq } from './sections/faq';
import { Hero } from './sections/hero';
import { Moments } from './sections/moments';
import { Purpose } from './sections/purpose';
import { Shop } from './sections/shop';
import { Speakers } from './sections/speakers';
import { Video } from './sections/video';
import { Why } from './sections/why';

@Component({
  selector: 'app-root',
  imports: [
    Header, Hero, About, Moments, Purpose, Speakers, Video, Why, Shop, Faq, Closing, Footer,
    RegisterModal, VideoModal, ProfileModal, Toast,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-moments />
      <app-purpose />
      <app-speakers sectionId="speakers" heading="Meet the Speakers" tone="sand" [speakers]="speakers" />
      <app-speakers sectionId="breakout" heading="Breakout Session Speakers" tone="white" [speakers]="speakers" />
      <app-video />
      <app-why />
      <app-shop />
      <app-faq />
      <app-closing />
    </main>
    <app-footer />

    <app-register-modal />
    <app-video-modal />
    <app-profile-modal />
    <app-toast />
  `,
})
export class App {
  private readonly ui = inject(UiService);
  protected readonly speakers = SPEAKERS;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.ui.close();
  }
}
