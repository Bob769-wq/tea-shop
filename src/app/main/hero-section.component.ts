import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  template: `
    <img
      src="/hero-section.webp"
      alt="hero-section"
      class="mt-12 hidden md:block  md:mt-18 lg:block lg:mt-28"
    />
    <img src="/hero-section-s.webp" alt="" class="mt-12 md:hidden lg:hidden" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}
