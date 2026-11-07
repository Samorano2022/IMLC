import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="home">
      <div class="hero-text">
        <img class="hero-theme" src="assets/theme.png" alt="Revivals" />
        <p class="hero-sub">37TH INTERNATIONAL MINISTERS/LEADERSHIP CONFERENCE</p>
        <p class="hero-copy">Jan 21st - 25th, 2027 | Time: 9.00am &amp; 5.00pm Daily</p>
        <button class="button button-orange" type="button" (click)="ui.open('register')">
          Register now
        </button>
      </div>
      <div class="hero-portrait">
        <img
          src="assets/daddy-mummy.png"
          alt="Co-Hosts: Rev. Samson & Rev. Mrs. Stella Ajetomobi"
        />
        <div class="portrait-accent"></div>
      </div>

      <div class="hero-stats" appReveal [revealDelay]="200">
        <div>
          <strong>5</strong>
          <span>Days of gathering<br />Jan 21st – 25th</span>
        </div>
        <div>
          <strong>2×</strong>
          <span>Sessions daily<br />9.00am &amp; 5.00pm</span>
        </div>
        <div>
          <strong>37th</strong>
          <span>International Ministers /<br />Leadership Conference</span>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly ui = inject(UiService);
}
