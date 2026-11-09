import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SHOP_ITEMS } from '../core/data';
import { RevealDirective } from '../core/reveal.directive';
import { UiService } from '../core/ui.service';

@Component({
  selector: 'app-shop',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="resources section-pad" id="resources">
      <div class="section-heading" appReveal>
        <div>
          <h2>Explore the Conference Collection</h2>
          <p>
            Discover a curated collection of conference materials, branded merchandise, and
            <br />exclusive resources available for purchase.
          </p>
        </div>
      </div>
      <div class="shop-grid">
        @for (item of items; track $index) {
          <article class="speaker-card" appReveal [revealDelay]="($index % 3) * 90">
            <div class="speaker-photo"><img [src]="item.image" [alt]="item.name" /></div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }}</p>
          </article>
        }
      </div>
      <button class="button button-orange" type="button">
        Shop now
      </button>
    </section>
  `,
})
export class Shop {
  protected readonly ui = inject(UiService);
  protected readonly items = SHOP_ITEMS;
}
