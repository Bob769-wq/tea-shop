import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { getLocaleCurrencyName } from '@angular/common';

interface NavList {
  id: number;
  title: string;
  link: string;
  children?: MenuList[];
}

interface MenuList {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconModule],
  template: `
    <header
      class="flex lg:px-8 lg:py-5 justify-between items-center lg:items-start fixed top-0 left-0 bg-white w-full"
    >
      <div class="flex flex-1 items-end gap-9 px-4 py-2 lg:p-0">
        <a routerLink="/home" class="block h-10 lg:h-20 aspect-square">
          <img src="/logo.png" alt="logo" class="w-full h-full" />
        </a>

        <ul class="hidden lg:flex gap-6 text-sm py-1">
          @for (item of navListItems; track item.id) {
            <li class="relative group">
              <a class="flex items-center" [routerLink]="item.link"
                >{{ item.title }}
                <mat-icon>keyboard_arrow_down</mat-icon>
              </a>

              @if (item.children && item.children.length > 0) {
                <div
                  class="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                >
                  <ul class="py-2 flex flex-col">
                    @for (child of item.children; track child.id) {
                      <li class="p-2 hover:bg-gray-300 duration-200">
                        <a [routerLink]="child.link" class="text-gray-700">
                          {{ child.title }}
                        </a>
                      </li>
                    }
                  </ul>
                </div>
              }
            </li>
          }
        </ul>
      </div>

      <div>
        <ul class="flex items-center gap-5 ">
          <li class="flex cursor-pointer hover:text-orange-400">
            <mat-icon>search</mat-icon>
          </li>
          <li class="lg:flex hidden cursor-pointer hover:text-orange-400">
            $TWD
            <mat-icon>keyboard_arrow_down</mat-icon>
          </li>
          <li class="lg:flex hidden cursor-pointer hover:text-orange-400">
            <mat-icon>chat</mat-icon>
          </li>
          <li class="flex cursor-pointer hover:text-orange-400">
            <mat-icon>person</mat-icon>
          </li>
          <li class="flex cursor-pointer hover:text-orange-400">
            <mat-icon>shopping_bag</mat-icon>
          </li>
          <button class="lg:hidden bg-gray-100 px-4 py-3 " (click)="toggleMenu()">
            <mat-icon>menu</mat-icon>
          </button>
        </ul>
      </div>
    </header>

    <div class="fixed inset-0 bg-white z-50 overflow-y-auto" [class.hidden]="!isMenuOpen()">
      <header class="flex justify-between px-10 py-6 border-b border-b-gray-100">
        <div class="text-2xl ">目錄</div>
        <mat-icon (click)="toggleMenu()">close</mat-icon>
      </header>
      <ul class="flex flex-col py-2">
        @for (item of navListItems; track item.id) {
          <div class="flex items-center px-10 py-4">
            <li class="flex-1">
              <a [routerLink]="item.link" class="block w-full">{{ item.title }}</a>
            </li>
            <mat-icon
              class="transition-transform duration-300 ease-in-out"
              [class.rotate-180]="isExpanded(item.id)"
              (click)="toggleSubMenu(item.id)"
              >arrow_drop_down
            </mat-icon>
          </div>

          @if (isExpanded(item.id)) {
            <ul class="flex flex-col bg-gray-50">
              @for (child of item.children; track child.id) {
                <li class="px-10 py-4">
                  <a [routerLink]="child.link">{{ child.title }}</a>
                </li>
              }
            </ul>
          }
        }
      </ul>
      <ul class="flex flex-col gap-8 px-10 py-8 border-t border-t-gray-100">
        <li class="flex-1"><a routerLink="/member" class="block w-full">會員登入</a></li>
        <li class="flex-1"><a routerLink="/new" class="block w-full">新用戶註冊</a></li>
      </ul>
      <ul class="flex flex-col gap-8 px-10 py-8 border-t border-t-gray-100">
        <div class="flex items-center">
          <li class="flex-1"><a routerLink="/contact" class="block w-full">聯絡我們</a></li>
          <mat-icon>comment</mat-icon>
        </div>
        <div class="flex items-center ">
          <li class="flex-1"><a routerLink="/coin" class="block w-full">幣值</a></li>
          <div class="flex items-center gap-3">
            <span>$TWD</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"
              />
            </svg>
          </div>
        </div>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navListItems: NavList[] = [
    {
      id: 1,
      title: '💦 如沐山林',
      link: '/shower',
      children: [
        { id: 1, title: 'Chill,如沐山林９折', link: '/10%-off' },
        { id: 2, title: '——所有活動商品', link: '/activity' },
        { id: 3, title: '髮．身．雙入禮２件９５折', link: '/5%-off' },
        { id: 4, title: '植萃護手霜３件９折', link: '/3-10%-off' },
        { id: 5, title: '首購推薦．經典入門', link: '/classic' },
        { id: 6, title: '官網獨家９折起', link: '/special' },
      ],
    },
    {
      id: 2,
      title: '主題推薦',
      link: '/recommend',
      children: [
        { id: 1, title: 'Chill，如沐山林—肖楠葉', link: '/leaf' },
        { id: 2, title: '透白，由身綻放—水芙蓉', link: '/water-flower' },
        { id: 3, title: '三大經典明星香氣精油', link: '/big-three' },
        { id: 4, title: '2025迎豐果年度版畫禮盒', link: '/2025-box' },
        { id: 5, title: '首購限定！免運體驗組', link: '/free-ride' },
        { id: 6, title: '空瓶回收，永續行動', link: '/recycle' },
        { id: 7, title: '全系列植萃護手霜', link: '/all-series' },
      ],
    },
    {
      id: 3,
      title: '油系列',
      link: '/oil',
      children: [
        { id: 1, title: '油系列健康指南', link: '/oil-map' },
        { id: 2, title: '——油系列所有商品', link: '/oil-products' },
      ],
    },
    {
      id: 4,
      title: '髮系列',
      link: '/hair',
      children: [
        { id: 1, title: '髮系列養護指南', link: '/hair-map' },
        { id: 2, title: '——髮系列所有商品', link: '/hair-products' },
        { id: 3, title: '洗髮露', link: '/hair-wash' },
        { id: 4, title: '護髮素', link: '/hair-protect' },
      ],
    },
    {
      id: 5,
      title: '身系列',
      link: '/body',
      children: [
        { id: 1, title: '身系列保養指南', link: '/body-map' },
        { id: 2, title: '——身系列所有商品', link: '/body-products' },
        { id: 3, title: '洗手露', link: '/hand-wash' },
        { id: 4, title: '護手霜', link: '/hand-protect' },
        { id: 5, title: '沐浴露', link: '/body-wash' },
        { id: 6, title: '乳液', link: '/lotion' },
      ],
    },
    {
      id: 6,
      title: '家系列',
      link: '/home',
      children: [
        { id: 1, title: '家系列保養指南', link: '/home-map' },
        { id: 2, title: '——家系列所有商品', link: '/home-products' },
        { id: 3, title: '居家清潔', link: '/home-clean' },
        { id: 4, title: '居家香氛', link: '/home-perfume' },
      ],
    },
    {
      id: 7,
      title: '禮系列',
      link: '/gift',
      children: [
        { id: 1, title: '禮系列送禮指南', link: '/gift-map' },
        { id: 2, title: '——禮系列所有商品', link: '/gift-products' },
      ],
    },
    {
      id: 8,
      title: '企業禮贈',
      link: '/donate',
      children: [
        { id: 1, title: '企業採購', link: '/buy-a-lot' },
        { id: 2, title: '婚禮小物', link: '/wedding' },
        { id: 3, title: '飯店合作', link: '/hotel-cooperation' },
      ],
    },
    {
      id: 9,
      title: '認識茶籽堂',
      link: '/who-am-i',
      children: [
        { id: 1, title: '認識茶籽堂', link: '/who-am-i' },
        { id: 2, title: '——產品總覽 Product', link: '/product' },
        { id: 3, title: '中文版', link: '/5%-off' },
        { id: 4, title: 'English version', link: '/en' },
        { id: 5, title: '日本語版', link: '/japan' },
        { id: 6, title: '한국어 버전', link: '/korea' },
      ],
    },
    {
      id: 10,
      title: '部落格',
      link: '/blog',
      children: [
        { id: 1, title: '永續循環', link: '/sustainable' },
        { id: 2, title: '產品新知', link: '/new-product' },
        { id: 3, title: '苦茶油文化', link: '/bitter-oil' },
        { id: 4, title: '工藝美學', link: '/art' },
        { id: 5, title: '朝陽社區', link: '/sunshine' },
        { id: 6, title: '媒體報導', link: '/media' },
        { id: 7, title: '異業合作', link: '/cooperation' },
        { id: 8, title: '遇見肖楠葉', link: '/meet-leaf' },
      ],
    },
  ];

  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  expandedItems = signal<Set<number>>(new Set());

  toggleSubMenu(itemId: number) {
    const currentExpanded = new Set(this.expandedItems());

    if (currentExpanded.has(itemId)) {
      currentExpanded.delete(itemId);
    } else {
      currentExpanded.add(itemId);
    }
    this.expandedItems.set(currentExpanded);
  }

  isExpanded(itemId: number): boolean {
    return this.expandedItems().has(itemId);
  }
}
