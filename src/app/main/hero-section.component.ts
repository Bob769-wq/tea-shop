import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  template: ` <img src="/hero-section.webp" alt="hero-section" class="mt-12 md:mt-20 lg:mt-28" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}
