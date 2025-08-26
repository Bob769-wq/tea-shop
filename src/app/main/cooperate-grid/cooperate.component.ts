import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cooperate',
  imports: [],
  template: `
    <section class="max-w-6xl m-auto">
      <div class="flex justify-center py-16">
<!--        TODO: 手機版的文字大小不對-->
        <h1
          class="border-b border-b-black inline-block pb-1 text-center font-medium text-5xl tracking-widest"
        >
          茶籽堂合作通路
        </h1>
      </div>
      <div class="hidden md:block md:px-24 lg:px-0">
<!--       TODO: 這個部分用html/css取代圖片 -->
<!--        TODO: 使用圖片的時候alt記得要寫，跟前端的accessibility有關係，如果不知道是什麼再自己查一下-->
        <img src="/north-region.webp" alt="" />
        <img src="/hakka-region.webp" alt="" />
        <img src="/gun-region.webp" alt="" />
        <img src="/south-region.webp" alt="" />
        <img src="/island-region.webp" alt="" />
      </div>
      <div class="md:hidden px-4">
        <img src="/north-region-s.webp" alt="" />
        <img src="/hakka-region-s.webp" alt="" />
        <img src="/gun-region-s.webp" alt="" />
        <img src="/south-region-s.webp" alt="" />
        <img src="/island-region-s.webp" alt="" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperateComponent {}
