import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_EMAIL } from '../core/data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer" id="footer">
      <div class="footer-brand">
        <img class="hero-theme" src="assets/theme.png" alt="Revivals" />
        <!-- <a class="brand" href="#home">
          <span class="brand-mark">✦</span>
          <span>IMLC <small>INTERNATIONAL MINISTERS</small></span>
        </a> -->
        <!-- <h2>REVIVALS<span class="flame">✦</span></h2> -->
        <p>Equipping leaders. Strengthening the Church. Advancing the Kingdom.</p>
      </div>
      <div>
        <p class="eyebrow light">EXPLORE</p>
        <a href="#about">About</a>
        <a href="#speakers">Speakers</a>
        <a href="#programme">Programme</a>
        <a href="#faq">FAQs</a>
      </div>
      <div>
        <p class="eyebrow light">GET IN TOUCH</p>
        <a href="#footer">Instagram </a>
        <a href="#footer">Facebook</a>
        <a href="#footer">Youtube</a>
      </div>
      <div>
        <p class="eyebrow light">CONTACT</p>
        <a href="#footer"
          >Leadership and Missions Conference Centre, Olororo, Ojoo, Ibadan, Nigeria.</a
        >
        <a href="#footer">mivmandate2010@gmail.com</a>
        <a href="#footer">0808 085 4818</a>
      </div>
      <div class="footer-bottom">
        <span>© 2027 Men of Issachar Vision Inc. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly email = CONTACT_EMAIL;
}
