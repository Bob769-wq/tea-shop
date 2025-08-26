import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

interface FooterList {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatDivider, MatIconModule],
  template: `
    <footer class="flex flex-col px-8 bg-[#333] lg:px-16 ">
      <section class="flex flex-col gap-6 lg:flex-row lg:justify-between pt-16 lg:py-16">
        <div class="flex flex-col items-center gap-8 lg:items-start">
          <div>
<!--            TODO: 使用routerLink的時候最好把routerLinkActive/routerLinkActiveOptions也一起寫上去-->
            <a routerLink="/home" class="block h-20 aspect-square"
              ><img src="/logo-footer.png" alt="logo-footer"
            /></a>
          </div>
          <div class="text-gray-400 text-center lg:text-start">
            <p>回到土地，讓美好發生</p>
            <p>Good Things Happen</p>
          </div>
          <div class="flex items-center gap-8">
            <a href="/facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="0 0 640 640"
                class="cursor-pointer hover:[&>path]:fill-white"
              >
                <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#9ca3af"
                  d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
                />
              </svg>
            </a>
            <a href="/instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="0 0 640 640"
                class="cursor-pointer hover:[&>path]:fill-white"
              >
                <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#9ca3af"
                  d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                />
              </svg>
            </a>
            <a href="/line">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 512 512"
                class="cursor-pointer hover:[&>path]:fill-white"
              >
                <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#9ca8af"
                  d="M311 196.8l0 81.3c0 2.1-1.6 3.7-3.7 3.7l-13 0c-1.3 0-2.4-.7-3-1.5L254 230 254 278.2c0 2.1-1.6 3.7-3.7 3.7l-13 0c-2.1 0-3.7-1.6-3.7-3.7l0-81.3c0-2.1 1.6-3.7 3.7-3.7l12.9 0c1.1 0 2.4 .6 3 1.6l37.3 50.3 0-48.2c0-2.1 1.6-3.7 3.7-3.7l13 0c2.1-.1 3.8 1.6 3.8 3.5l0 .1zm-93.7-3.7l-13 0c-2.1 0-3.7 1.6-3.7 3.7l0 81.3c0 2.1 1.6 3.7 3.7 3.7l13 0c2.1 0 3.7-1.6 3.7-3.7l0-81.3c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1l-35.6 0 0-64.4c0-2.1-1.6-3.7-3.7-3.7l-13 0c-2.1 0-3.7 1.6-3.7 3.7l0 81.3c0 1 .3 1.8 1 2.5 .7 .6 1.5 1 2.5 1l52.2 0c2.1 0 3.7-1.6 3.7-3.7l0-13c0-1.9-1.6-3.7-3.5-3.7l.1 0zm193.7-68.1l-52.3 0c-1.9 0-3.7 1.6-3.7 3.7l0 81.3c0 1.9 1.6 3.7 3.7 3.7l52.2 0c2.1 0 3.7-1.6 3.7-3.7l0-13.1c0-2.1-1.6-3.7-3.7-3.7l-35.5 0 0-13.6 35.5 0c2.1 0 3.7-1.6 3.7-3.7l0-13.1c0-2.1-1.6-3.7-3.7-3.7l-35.5 0 0-13.7 35.5 0c2.1 0 3.7-1.6 3.7-3.7l0-13c-.1-1.9-1.7-3.7-3.7-3.7l.1 0zM512 93.4l0 326c-.1 51.2-42.1 92.7-93.4 92.6l-326 0C41.4 511.9-.1 469.8 0 418.6l0-326C.1 41.4 42.2-.1 93.4 0l326 0c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3S68.8 150.1 68.8 233.5c0 74.7 66.3 137.4 155.9 149.3 21.8 4.7 19.3 12.7 14.4 42.1-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1l0-.2z"
                />
              </svg>
            </a>
            <a href="/youtube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                viewBox="0 0 640 640"
                class="cursor-pointer hover:[&>path]:fill-white"
              >
                <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#9ca3af"
                  d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"
                />
              </svg>
            </a>
          </div>
        </div>

<!--        TODO: click要可以打開跟關起來-->
        <div class="flex flex-col lg:flex-row lg:gap-20">
          <ul class="flex flex-col gap-2 py-3 lg:py-0 border-t border-t-gray-400 lg:border-none">
            <div class="flex justify-between">
              <h3 class="text-white lg:pb-6">客戶服務</h3>
              <mat-icon class="text-white lg:invisible">arrow_drop_down</mat-icon>
            </div>
            @for (item of serviceList; track item.id) {
              <li class="text-gray-400 text-sm cursor-pointer hover:text-white">
                <!--            TODO: 使用routerLink的時候最好把routerLinkActive/routerLinkActiveOptions也一起寫上去-->
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
          <ul
            class="flex flex-col gap-4 lg:gap-2 py-3 lg:py-0 border-t border-t-gray-400 lg:border-none"
          >
            <div class="flex justify-between">
              <h3 class="text-white lg:pb-6">關於茶籽堂</h3>
              <mat-icon class="text-white lg:invisible"> arrow_drop_down </mat-icon>
            </div>
            @for (item of aboutList; track item.id) {
              <li class="text-gray-400 text-sm cursor-pointer hover:text-white">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
          <ul class="flex flex-col gap-2 py-3 lg:py-0 border-t border-t-gray-400 lg:border-none">
            <div class="flex justify-between">
              <h3 class="text-white lg:pb-6">營業事業</h3>
              <mat-icon class="text-white lg:invisible">arrow_drop_down</mat-icon>
            </div>
            @for (item of businessList; track item.id) {
              <li class="text-gray-400 text-sm cursor-pointer hover:text-white">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
      </section>
      <div>
<!--        TODO: 如果不是全域的css可以直接寫在component裡面-->
        <mat-divider class="material-divider"></mat-divider>
      </div>
      <section class="flex flex-col gap-6 lg:hidden text-gray-400 text-sm py-8">
        <div class="flex gap-6">
          <a routerLink="/policy" class="hover:text-white">政策＆條款</a>
          <a routerLink="/private" class="hover:text-white">隱私權聲明</a>
        </div>
        <!--        TODO:這邊為什麼需要多包一個div?如果用不到就拿掉-->
        <div>
          <p>© 茶籽堂</p>
        </div>
      </section>
      <section
        class="hidden gap-6 lg:flex lg:justify-between lg:items-center text-gray-400 text-sm py-8"
      >
<!--        TODO:這邊為什麼需要多包一個div?如果用不到就拿掉-->
        <div>
          <p>© 茶籽堂</p>
        </div>
        <div class="flex gap-6">
          <a routerLink="/policy" class="hover:text-white">政策＆條款</a>
          <a routerLink="/private" class="hover:text-white">隱私權聲明</a>
        </div>
      </section>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  serviceList: FooterList[] = [
    { id: 1, title: '訂單查詢', link: '/search' },
    { id: 2, title: '關於會員', link: '/member' },
    { id: 3, title: '常見問題', link: '/faq' },
    { id: 4, title: '生日優惠使用說明', link: '/hbd' },
    { id: 5, title: '訂購說明', link: '/pre-buy' },
    { id: 6, title: '海外訂購須知', link: '/sea' },
    { id: 7, title: '退換貨政策', link: '/change' },
    { id: 8, title: '異業合作', link: '/cooperate' },
  ];

  aboutList: FooterList[] = [
    { id: 1, title: '認識茶籽堂', link: '/about' },
    { id: 2, title: '永續行動', link: '/sustainable' },
    { id: 3, title: '部落格', link: '/blog' },
    { id: 4, title: '媒體報導', link: '/media' },
    { id: 5, title: '夥伴招募', link: '/job' },
    { id: 6, title: '聯絡我們', link: '/contact' },
  ];

  businessList: FooterList[] = [
    { id: 1, title: '企業採購', link: '/buy-a-lot' },
    { id: 2, title: '飯店合作', link: '/hotel' },
    { id: 3, title: '婚禮小物', link: '/wedding' },
    { id: 4, title: '店舖資訊', link: '/shop' },
    { id: 5, title: '企業參訪', link: '/visit' },
  ];
}
