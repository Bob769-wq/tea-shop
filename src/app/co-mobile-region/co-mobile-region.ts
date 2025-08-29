import { Component, input } from '@angular/core';
import { CoMobileDumb } from '../co-mobile-dumb/co-mobile-dumb';

interface ChildrenItems {
  id: number;
  store: string;
  phone: string;
  address: string;
  time: OpenTime[];
  open?: string;
}

interface OpenTime {
  id: number;
  day: string;
}

@Component({
  selector: 'app-co-mobile-region',
  imports: [CoMobileDumb],
  template: `
    <div class="text-lg">
      <h3 class="text-xl tracking-widest mt-8 text-[#929292]">{{ title() }}</h3>
      @for (mobile of items(); track mobile.id) {
        <app-co-mobile-dumb [mobile]="mobile" />
      }
    </div>
  `,
  styles: ``,
})
export class CoMobileRegion {
  title = input.required<string>();
  items = input.required<ChildrenItems[]>();
}
