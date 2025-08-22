import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

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
      class="flex px-4 py-3 lg:px-8 lg:py-5 justify-between items-center lg:items-start fixed top-0 left-0 bg-white w-full"
    >
      <div class="flex items-end gap-9">
        <a routerLink="/home" class="block h-10 lg:h-20 aspect-square">
          <img src="/logo.png" alt="logo" class="w-full h-full" />
        </a>
        <ul class="hidden lg:flex gap-6 text-sm py-1">
          @for (item of navListItems; track item.id) {
            <li>
              <a class="flex items-center" [routerLink]="item.link"
                >{{ item.title }}<mat-icon>keyboard_arrow_down</mat-icon></a
              >
            </li>
          }
        </ul>
      </div>

      <div>
        <ul class="flex items-center gap-5 ">
          <li class="flex"><mat-icon>search</mat-icon></li>
          <li class="lg:flex hidden">$TWD<mat-icon>keyboard_arrow_down</mat-icon></li>
          <li class="lg:flex hidden"><mat-icon>chat</mat-icon></li>
          <li class="flex"><mat-icon>person</mat-icon></li>
          <li class="flex"><mat-icon>shopping_bag</mat-icon></li>
          <button class="flex lg:hidden"><mat-icon>menu</mat-icon></button>
        </ul>
      </div>
    </header>
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
}
