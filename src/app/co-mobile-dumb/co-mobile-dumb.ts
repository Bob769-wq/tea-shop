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
  selector: 'app-co-mobile-dumb',
  imports: [],
  template: `
    <div class="flex border-t border-t-gray-100 mt-3 py-2">
      <span class="flex flex-shrink-0 text-[#BE9F6F]"
        >門<span class="invisible">一一</span>市｜</span
      >
      <span>{{ mobile().store }}</span>
    </div>
    <div class="flex py-2">
      <span class="flex flex-shrink-0 text-[#BE9F6F]"
        >電<span class="invisible">一一</span>話｜</span
      >
      <span>{{ mobile().phone }}</span>
    </div>
    <div class="flex py-2">
      <span class="flex flex-shrink-0 text-[#BE9F6F]"
        >地<span class="invisible">一一</span>址｜</span
      >
      <span>{{ mobile().address }}</span>
    </div>
    <div class="flex py-2">
      <span class="flex flex-shrink-0 text-[#BE9F6F]">營業時間｜</span>
      <div class="flex flex-col gap-2">
        @for (days of mobile().time; track days.id) {
          <span>{{ days.day }}</span>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CoMobileDumb {
  mobile = input.required<ChildrenItems>();
}
