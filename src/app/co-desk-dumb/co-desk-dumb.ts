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
    <div class="grid grid-cols-[2fr_1fr_2fr_2fr] items-center py-4 border-b text-sm">
      <div>{{ card().store }}</div>
      <div>{{ card().phone }}</div>
      <div>{{ card().address }}</div>
      <div>
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
