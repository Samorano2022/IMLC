import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SHOP_ITEMS } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';
import { Scroll3dDirective } from '../core/scroll-3d.directive';
import { Tilt3dDirective } from '../core/tilt-3d.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-shop',
  imports: [RevealDirective, Scroll3dDirective, Tilt3dDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="resources section-pad" id="resources">
      <div class="section-heading" appReveal>
        <div>
          <h2>Explore the Conference Collection</h2>
          <p>
            Pick your colour and size, pay securely online, and collect <br />
            your order at the conference store. You only sign in at checkout.
          </p>
        </div>
      </div>
      <div class="shop-grid perspective-stage">
        @for (item of items; track $index) {
          <article
            class="shop-card preserve-3d"
            appReveal
            [revealDelay]="($index % 3) * 90"
            appScroll3d
            [depth]="36"
            [rotateX]="5"
            [parallax]="0.05"
            appTilt3d
            [maxTilt]="8"
          >
            <div class="speaker-photo preserve-3d depth-z-10">
              <img [src]="item.image" [alt]="item.name" />
            </div>
            <h3 class="depth-z-20">{{ item.name }}</h3>
            <p class="depth-z-10">{{ item.price }}</p>
          </article>
        }
      </div>
      <div>
        <br />
        <a
          target="_blank"
          href="https://conference.menofissacharvision.com/shop"
          class="button button-orange"
          >Shop now</a
        >
      </div>
    </section>
  `,
})
export class Shop {
  protected readonly ui = inject(UiService);
  protected readonly items = SHOP_ITEMS;
}
