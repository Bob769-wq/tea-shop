import { Component, input } from '@angular/core';

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
  selector: 'app-co-desk-dumb',
  imports: [],
  template: `
    <div
      class="grid grid-cols-[2fr_1fr_2fr_2fr] items-center py-4 border-b text-super-small lg:text-xs "
    >
      <div class="px-2 ">{{ card().store }}</div>
      <div class="px-2">{{ card().phone }}</div>
      <div class="px-2">{{ card().address }}</div>
      <div class="px-2">
        @for (day of card().time; track day.id) {
          <div>
            {{ day.day }}
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CoDeskDumb {
  card = input.required<ChildrenItems>();
}
