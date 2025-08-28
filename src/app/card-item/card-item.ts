import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface GridItems {
  id: number;
  img: string;
  link: string;
  title?: string;
  address?: string;
  phone?: string;
  open?: { id: number; day: string }[];
}

@Component({
  selector: 'app-card-item',
  imports: [],
  template: `
    <a target="_blank" [href]="card().link">
      <div class="aspect-[16/9]">
        <img [src]="card().img" class="w-full" [alt]="card().title" />
      </div>
      <div class="flex flex-col py-2">
        <h3>{{ card().title }}</h3>
        <span class="text-xs text-gray-600 mt-2">{{ card().address }}</span>
        <span class="text-xs text-gray-600 mt-1">{{ card().phone }}</span>
        <div class="flex flex-col gap-1 mt-4 text-gray-400 text-xs">
          @for (days of card().open; track days.id) {
            <span>{{ days.day }}</span>
          }
        </div>
      </div>
    </a>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItem {
  card = input.required<GridItems>();
}
