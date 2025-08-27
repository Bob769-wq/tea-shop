import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  template: `
    <img
      src="/hero-section.webp"
      alt="hero-section"
      class="mt-10 hidden md:block  md:mt-8 lg:block lg:mt-24"
    />
    <img src="/hero-section-s.webp" alt="" class="mt-8 md:hidden lg:hidden" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}
