import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-right-corner',
  imports: [],
  template: `
    done
    <div class="fixed right-5 bottom-5 z-50">
      <button
        class="w-16 h-16 bg-green-500 rounded-full rounded-ee-none flex justify-center items-center group relative"
      >
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="3" class="transition-all duration-300 ease-out" />
          <circle
            cx="12"
            cy="12"
            r="3"
            class="transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-2"
          />
          <path
            d="M 9 18 A 3 3 0 0 0 15 18 Z"
            class="transition-all duration-300 ease-out opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          />
          <circle cx="19" cy="12" r="3" class="transition-all duration-300 ease-out" />
        </svg>
      </button>
    </div>
  `,
})
export class RightCornerComponent {}
