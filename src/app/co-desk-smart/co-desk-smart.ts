import { Component } from '@angular/core';
import { CoDeskDumb } from '../co-desk-dumb/co-desk-dumb';

@Component({
  selector: 'app-co-desk-smart',
  imports: [CoDeskDumb],
  template: `
    <div class="md:flex md:px-12 flex-col gap-32 hidden py-28">
      <div>
        <h3 class="text-[#929292] text-xl">北北基</h3>
        <div
          class="grid grid-cols-[2fr_1fr_2fr_2fr] border-b border-b-gray-400 py-2 mt-4 text-xs text-[#BE9F6F]"
        >
          <div>門市</div>
          <div>電話</div>
          <div>地址</div>
          <div>營業時間</div>
        </div>
        @for (card of NorthItems; track card.id) {
          <app-co-desk-dumb [card]="card" />
        }
      </div>
      <div>
        <h3 class="text-[#929292] text-xl">桃竹苗</h3>
        <div
          class="grid grid-cols-[2fr_1fr_2fr_2fr] border-b border-b-gray-400 py-2 mt-4 text-xs text-[#BE9F6F]"
        >
          <div>門市</div>
          <div>電話</div>
          <div>地址</div>
          <div>營業時間</div>
        </div>
        @for (card of HakkaItems; track card.id) {
          <app-co-desk-dumb [card]="card" />
        }
      </div>
      <div>
        <h3 class="text-[#929292] text-xl">中區</h3>
        <div
          class="grid grid-cols-[2fr_1fr_2fr_2fr] border-b border-b-gray-400 py-2 mt-4 text-xs text-[#BE9F6F]"
        >
          <div>門市</div>
          <div>電話</div>
          <div>地址</div>
          <div>營業時間</div>
        </div>
        @for (card of GunItems; track card.id) {
          <app-co-desk-dumb [card]="card" />
        }
      </div>
      <div>
        <h3 class="text-[#929292] text-xl">南區</h3>
        <div
          class="grid grid-cols-[2fr_1fr_2fr_2fr] border-b border-b-gray-400 py-2 mt-4 text-xs text-[#BE9F6F]"
        >
          <div>門市</div>
          <div>電話</div>
          <div>地址</div>
          <div>營業時間</div>
        </div>
        @for (card of SouthItems; track card.id) {
          <app-co-desk-dumb [card]="card" />
        }
      </div>
      <div>
        <h3 class="text-[#929292] text-xl">外島</h3>
        <div
          class="grid grid-cols-[2fr_1fr_2fr_2fr] border-b border-b-gray-400 py-2 mt-4 text-xs text-[#BE9F6F]"
        >
          <div>門市</div>
          <div>電話</div>
          <div>地址</div>
          <div>營業時間</div>
        </div>
        @for (card of IslandItems; track card.id) {
          <app-co-desk-dumb [card]="card" />
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CoDeskSmart {
  NorthItems = [
    {
      id: 1,
      store: '誠品生活-expo 林口三井店',
      phone: '02-6637 5888 #701',
      address: '新北市林口區文化三路一段356號1F',
      time: [
        { id: 1, day: '週一～週四/11:00~21:30' },
        { id: 2, day: '週五、例假日前一天/11:00~22:00' },
        { id: 3, day: '週六～週日/10:30~22:00' },
      ],
      open: '週一～週四/11:00~21:30週五、例假日前一天/11:00~22:00週六～週日/10:30~22:00',
    },
    {
      id: 2,
      store: 'EVERRICH 昇恆昌臺北松山機場店',
      phone: '－',
      address: '台北市松山區敦化北路340-9號',
      time: [{ id: 1, day: '週一～週日/05:00~22:00' }],
      open: '週一～週日/05:00~22:00',
    },
    {
      id: 3,
      store: 'EVERRICH 昇恆昌臺北內湖旗艦店',
      phone: '02-8792 3999',
      address: '台北市內湖區金莊路129號1樓',
      time: [{ id: 1, day: '週一～週日/10:00~21:00' }],
      open: '週一～週日/10:00~21:00',
    },
  ];

  HakkaItems = [
    {
      id: 1,
      store: '誠品生活-expo 桃園統領店',
      phone: '03-339 0983',
      address: '桃園市桃源區中正路61號4F',
      time: [
        { id: 1, day: '週日～週四/11:00~21:30' },
        { id: 2, day: '週五～週六/11:00~22:00' },
      ],
      open: '週日～週四/11:00~21:30<br>週五～週六/11:00~22:00',
    },
    {
      id: 2,
      store: '誠品生活-expo SELECT 台茂店',
      phone: '03-263 9520 #35',
      address: '桃園市蘆竹區南崁路一段112號6F(台茂購物中心)',
      time: [
        { id: 1, day: '週一～週四/11:00~22:00' },
        { id: 2, day: '週五、週六、例假日前一天/11:00~22:30' },
      ],
      open: '週一～週四/11:00~22:00<br>週五、週六、例假日前一天/11:00~22:30',
    },
    {
      id: 3,
      store: 'EVERRICH 昇恆昌桃園機場 T1',
      phone: '－',
      address: '南區商業服務區-藥妝店',
      time: [{ id: 1, day: '週一～週日/06:00~23:00' }],
      open: '週一～週日/06:00~23:00',
    },
    {
      id: 4,
      store: 'EVERRICH 昇恆昌桃園機場 T2',
      phone: '－',
      address: '南區商業服務區-藥妝店',
      time: [{ id: 1, day: '週一～週日/06:00~23:00' }],
      open: '週一～週日/06:00~23:00',
    },
    {
      id: 5,
      store: 'TAIWAN DUTY FREE 采盟免稅店-桃園機場 T2',
      phone: '－',
      address: '桃園市大園區航站南路9號',
      time: [{ id: 1, day: '週一～週日/06:00~23:00' }],
      open: '週一～週日/06:00~23:00',
    },
  ];

  GunItems = [
    {
      id: 1,
      store: '誠品生活-expo 中友店',
      phone: '04-2221 1287',
      address: '臺中市北區三民路三段161號11F(中友百貨C棟)',
      time: [
        { id: 1, day: '週一～週五/11:00~22:00' },
        { id: 2, day: '週六～週日/10:30~22:00' },
      ],
      open: '週一～週五/11:00~22:00<br>週六～週日/10:30~22:00',
    },
    {
      id: 2,
      store: '誠品生活-expo 台中三井店',
      phone: '04-2657 5856',
      address: '台中市梧棲區台灣大道十段168號1F(19800櫃)',
      time: [{ id: 1, day: '週一～週日/11:00~21:30' }],
      open: '週一～週日/11:00~21:30',
    },
    {
      id: 3,
      store: '誠品生活-expo SELECT台中480店',
      phone: '04-2251 6898 #4015',
      address: '台中市西屯區市政路480號4樓',
      time: [{ id: 1, day: '週一～週日/11:00~22:00' }],
      open: '週一～週日/11:00~21:30',
    },
    {
      id: 4,
      store: 'EVERRICH 台中國際機場 3F',
      phone: '－',
      address: '台中市沙鹿區中航路一段168號',
      time: [{ id: 1, day: '週一～週日/06:00~22:00' }],
      open: '週一～週日/11:00~21:30',
    },
  ];

  SouthItems = [
    {
      id: 1,
      store: '誠品生活-expo 南紡店',
      phone: '06-602 5600',
      address: '臺南市東區中華東路一段366號2F(南紡購物中心)',
      time: [{ id: 1, day: '週一～週日/11:00~22:00' }],
      open: '週一～週日/11:00~22:00',
    },
    {
      id: 2,
      store: '林百貨',
      phone: '06-221 3000',
      address: '台南市西區忠義路二段63號',
      time: [{ id: 1, day: '週一～週日/11:00~22:00' }],
      open: '週一～週日/11:00~22:00',
    },
    {
      id: 3,
      store: 'EVERRICH 高雄國際機場 出境',
      phone: '－',
      address: '高雄市小港區中山四路2號',
      time: [{ id: 1, day: '週一～週日/5:30~21:00' }],
      open: '週一～週日/5:30~21:00',
    },
  ];

  IslandItems = [
    {
      id: 1,
      store: '澎坊三號港 Pier 3',
      phone: '080-088 9909',
      address: '澎湖縣馬公市同和路158號',
      time: [{ id: 1, day: '週一～週日/11:00~21:00' }],
      open: '週一～週日/11:00~21:00',
    },
  ];
}
