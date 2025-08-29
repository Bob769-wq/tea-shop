import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './main/hero-section.component';
import { CooperateComponent } from './main/cooperate-grid/cooperate.component';
import { FooterComponent } from './footer/footer.component';
import { RightCornerComponent } from './right-corner.component';
import { DirectComponent } from './main/direct-grid/direct.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    CooperateComponent,
    FooterComponent,
    RightCornerComponent,
    DirectComponent,
  ],
  template: `
    <app-right-corner />
    <app-header />
    <app-hero-section />
    <app-direct />
    <app-cooperate />
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
