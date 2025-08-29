import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoDeskSmart } from '../../co-desk-smart/co-desk-smart';
import { CoMobileSmart } from '../../co-mobile-smart/co-mobile-smart';

@Component({
  selector: 'app-cooperate',
  imports: [CoDeskSmart, CoMobileSmart],
  template: `
    <section class="max-w-6xl m-auto">
      <div class="flex justify-center py-5">
        <!--        <h1-->
        <!--          class="border-b border-b-black inline-block pb-1 text-center font-medium text-5xl tracking-widest"-->
        <!--        >-->
        <!--          茶籽堂合作通路-->
        <!--        </h1>-->
        <img src="/cooperate-title-s.webp" alt="cooperate-title-s" class="md:hidden" />
        <img
          src="/cooperation-title-m.webp"
          alt="cooperate-title-m"
          class="hidden md:block lg:hidden"
        />
        <img src="/cooperate-title-lg.webp" alt="cooperate-title-lg" class="hidden lg:block" />
      </div>
      <!--      <div class="hidden md:block md:px-24 lg:px-0">-->
      <!--        <img src="/north-region.webp" alt="north-region" />-->
      <!--        <img src="/hakka-region.webp" alt="hakka-region" />-->
      <!--        <img src="/gun-region.webp" alt="gun-region" />-->
      <!--        <img src="/south-region.webp" alt="south-region" />-->
      <!--        <img src="/island-region.webp" alt="island-region" />-->
      <!--      </div>-->
      <!--      <div class="md:hidden px-4">-->
      <!--        <img src="/north-region-s.webp" alt="north-region-s" />-->
      <!--        <img src="/hakka-region-s.webp" alt="hakka-region-s" />-->
      <!--        <img src="/gun-region-s.webp" alt="gun-region-s" />-->
      <!--        <img src="/south-region-s.webp" alt="south-region-s" />-->
      <!--        <img src="/island-region-s.webp" alt="island-region-s" />-->
      <!--      </div>-->

      <app-co-mobile-smart />

      <app-co-desk-smart />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperateComponent {}
