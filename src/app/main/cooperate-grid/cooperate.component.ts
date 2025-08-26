import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ChildrenItems {
  id: number;
  store: string;
  phone: string;
  address: string;
  open: OpenTime[];
}

interface OpenTime {
  id: number;
  day: string;
}

@Component({
  selector: 'app-cooperate',
  imports: [],
  template: `
    <section class="max-w-6xl m-auto">
      <div class="flex justify-center py-5">
        <!--        TODO: 手機版的文字大小不對 找到圖片解決-->
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
      <!--       TODO: 這個部分用html/css取代圖片 -->
      <!--        TODO: 使用圖片的時候alt記得要寫，跟前端的accessibility有關係，如果不知道是什麼再自己查一下 解決-->
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

      <div class="flex flex-col px-6 pt-8 pb-24">
        <h3 class="text-xl tracking-widest">北北基</h3>
        @for (north of NorthItems; track north.id) {
          <div class="text-lg">
            <div class="flex border-t border-t-gray-100 mt-3 py-2">
              <span class="flex flex-shrink-0">門<span class="invisible">一一</span>市｜</span>
              <span>{{ north.store }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">電<span class="invisible">一一</span>話｜</span>
              <span>{{ north.phone }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">地<span class="invisible">一一</span>址｜</span>
              <span>{{ north.address }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">營業時間｜</span>
              <div class="flex flex-col gap-2">
                @for (days of north.open; track days.id) {
                  <span>{{ days.day }}</span>
                }
              </div>
            </div>
          </div>
        }
        <h3 class="text-xl tracking-widest">桃竹苗</h3>
        @for (hakka of HakkaItems; track hakka.id) {
          <div class="text-lg">
            <div class="flex border-t border-t-gray-100 mt-3 py-2">
              <span class="flex flex-shrink-0">門<span class="invisible">一一</span>市｜</span>
              <span>{{ hakka.store }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">電<span class="invisible">一一</span>話｜</span>
              <span>{{ hakka.phone }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">地<span class="invisible">一一</span>址｜</span>
              <span>{{ hakka.address }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">營業時間｜</span>
              <div class="flex flex-col gap-2">
                @for (days of hakka.open; track days.id) {
                  <span>{{ days.day }}</span>
                }
              </div>
            </div>
          </div>
        }
        <h3 class="text-xl tracking-widest">中區</h3>
        @for (gun of GunItems; track gun.id) {
          <div class="text-lg">
            <div class="flex border-t border-t-gray-100 mt-3 py-2">
              <span class="flex flex-shrink-0">門<span class="invisible">一一</span>市｜</span>
              <span>{{ gun.store }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">電<span class="invisible">一一</span>話｜</span>
              <span>{{ gun.phone }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">地<span class="invisible">一一</span>址｜</span>
              <span>{{ gun.address }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">營業時間｜</span>
              <div class="flex flex-col gap-2">
                @for (days of gun.open; track days.id) {
                  <span>{{ days.day }}</span>
                }
              </div>
            </div>
          </div>
        }
        <h3 class="text-xl tracking-widest">南區</h3>
        @for (south of SouthItems; track south.id) {
          <div class="text-lg">
            <div class="flex border-t border-t-gray-100 mt-3 py-2">
              <span class="flex flex-shrink-0">門<span class="invisible">一一</span>市｜</span>
              <span>{{ south.store }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">電<span class="invisible">一一</span>話｜</span>
              <span>{{ south.phone }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">地<span class="invisible">一一</span>址｜</span>
              <span>{{ south.address }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">營業時間｜</span>
              <div class="flex flex-col gap-2">
                @for (days of south.open; track days.id) {
                  <span>{{ days.day }}</span>
                }
              </div>
            </div>
          </div>
        }
        <h3 class="text-xl tracking-widest">外島</h3>
        @for (island of IslandItems; track island.id) {
          <div class="text-lg">
            <div class="flex border-t border-t-gray-100 mt-3 py-2">
              <span class="flex flex-shrink-0">門<span class="invisible">一一</span>市｜</span>
              <span>{{ island.store }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">電<span class="invisible">一一</span>話｜</span>
              <span>{{ island.phone }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">地<span class="invisible">一一</span>址｜</span>
              <span>{{ island.address }}</span>
            </div>
            <div class="flex py-2">
              <span class="flex flex-shrink-0">營業時間｜</span>
              <div class="flex flex-col gap-2">
                @for (days of island.open; track days.id) {
                  <span>{{ days.day }}</span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperateComponent {
  NorthItems: ChildrenItems[] = [
    {
      id: 1,
      store: '誠品生活-expo 林口三井店',
      phone: '02-6637 5888 #701',
      address: '新北市林口區文化三路一段356號1F',
      open: [
        { id: 1, day: '週一～週四/11:00~21:30' },
        { id: 2, day: '週五、例假日前一天/11:00~22:00' },
        { id: 3, day: '週六～週日/10:30~22:00' },
      ],
    },
    {
      id: 2,
      store: 'EVERRICH 昇恆昌臺北松山機場店',
      phone: '－',
      address: '台北市松山區敦化北路340-9號',
      open: [{ id: 1, day: '週一～週日/05:00~22:00' }],
    },
    {
      id: 3,
      store: 'EVERRICH 昇恆昌臺北內湖旗艦店',
      phone: '02-8792 3999',
      address: '台北市內湖區金莊路129號1樓',
      open: [{ id: 1, day: '週一～週日/10:00~21:00' }],
    },
  ];

  HakkaItems: ChildrenItems[] = [
    {
      id: 1,
      store: '誠品生活-expo 桃園統領店',
      phone: '03-339 0983',
      address: '桃園市桃源區中正路61號4F',
      open: [
        { id: 1, day: '週日～週四/11:00~21:30' },
        { id: 2, day: '週五～週六/11:00~22:00' },
      ],
    },
    {
      id: 2,
      store: '誠品生活-expo SELECT 台茂店',
      phone: '03-263 9520 #35',
      address: '桃園市蘆竹區南崁路一段112號6F(台茂購物中心)',
      open: [
        { id: 1, day: '週一～週四/11:00~22:00' },
        { id: 2, day: '週五、週六、例假日前一天/11:00~22:30' },
      ],
    },
    {
      id: 3,
      store: 'EVERRICH 昇恆昌桃園機場 T1',
      phone: '－',
      address: '南區商業服務區-藥妝店',
      open: [{ id: 1, day: '週一～週日/06:00~23:00' }],
    },
    {
      id: 4,
      store: 'EVERRICH 昇恆昌桃園機場 T2',
      phone: '－',
      address: '南區商業服務區-藥妝店',
      open: [{ id: 1, day: '週一～週日/06:00~23:00' }],
    },
    {
      id: 5,
      store: 'TAIWAN DUTY FREE 采盟免稅店-桃園機場 T2',
      phone: '－',
      address: '桃園市大園區航站南路9號',
      open: [{ id: 1, day: '週一～週日/06:00~23:00' }],
    },
  ];

  GunItems: ChildrenItems[] = [
    {
      id: 1,
      store: '誠品生活-expo 中友店',
      phone: '04-2221 1287',
      address: '臺中市北區三民路三段161號11F(中友百貨C棟)',
      open: [
        { id: 1, day: '週一～週五/11:00~22:00' },
        { id: 2, day: '週六～週日/10:30~22:00' },
      ],
    },
    {
      id: 2,
      store: '誠品生活-expo 台中三井店',
      phone: '04-2657 5856',
      address: '台中市梧棲區台灣大道十段168號1F(19800櫃)',
      open: [{ id: 1, day: '週一～週日/11:00~21:30' }],
    },
    {
      id: 3,
      store: '誠品生活-expo SELECT台中480店',
      phone: '04-2251 6898 #4015',
      address: '台中市西屯區市政路480號4樓',
      open: [{ id: 1, day: '週一～週日/11:00~22:00' }],
    },
    {
      id: 4,
      store: 'EVERRICH 台中國際機場 3F',
      phone: '－',
      address: '台中市沙鹿區中航路一段168號',
      open: [{ id: 1, day: '週一～週日/06:00~22:00' }],
    },
  ];

  SouthItems: ChildrenItems[] = [
    {
      id: 1,
      store: '誠品生活-expo 南紡店',
      phone: '06-602 5600',
      address: '臺南市東區中華東路一段366號2F(南紡購物中心)',
      open: [{ id: 1, day: '週一～週日/11:00~22:00' }],
    },
    {
      id: 2,
      store: '林百貨',
      phone: '06-221 3000',
      address: '台南市西區忠義路二段63號',
      open: [{ id: 1, day: '週一～週日/11:00~22:00' }],
    },
    {
      id: 3,
      store: 'EVERRICH 高雄國際機場 出境',
      phone: '－',
      address: '高雄市小港區中山四路2號',
      open: [{ id: 1, day: '週一～週日/5:30~21:00' }],
    },
  ];

  IslandItems: ChildrenItems[] = [
    {
      id: 1,
      store: '澎坊三號港 Pier 3',
      phone: '080-088 9909',
      address: '澎湖縣馬公市同和路158號',
      open: [{ id: 1, day: '週一～週日/11:00~21:00' }],
    },
  ];
}
