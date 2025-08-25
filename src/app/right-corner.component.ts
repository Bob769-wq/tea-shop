import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-right-corner',
  imports: [],
  template: `
    <div class="fixed right-5 bottom-5 z-50">
      <button class="w-16 h-16 bg-green-500 rounded-full flex justify-center items-center">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>
    </div>
  `,
})
export class RightCornerComponent {}
