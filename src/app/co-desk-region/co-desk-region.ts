import { Component, input } from '@angular/core';
import { CoDeskDumb } from '../co-desk-dumb/co-desk-dumb';

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
  selector: 'app-co-desk-region',
  imports: [CoDeskDumb],
  template: `
    <div>
      <h3 class="text-[#929292] text-xl">{{ title() }}</h3>
      <div
        class="grid grid-cols-[2fr_1fr_2fr_2fr] border-b border-b-gray-400 py-2 mt-9 text-sm  text-[#BE9F6F]"
      >
        <div>門市</div>
        <div>電話</div>
        <div>地址</div>
        <div>營業時間</div>
      </div>
      @for (card of items(); track card.id) {
        <app-co-desk-dumb [card]="card" />
      }
    </div>
  `,
  styles: ``,
})
export class CoDeskRegion {
  title = input.required<string>();
  items = input.required<ChildrenItems[]>();
}
