import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItem } from '../card-item/card-item';

@Component({
  selector: 'app-card-container',
  imports: [CardItem],
  template: `
    <section class="max-w-6xl m-auto">
      <div class="flex justify-center py-5">
        <img src="/direct-title-s.webp" alt="direct-title-s" class="md:hidden" />
        <img src="/direct-title-m.webp" alt="direct-title-m" class="hidden md:block lg:hidden" />
        <img src="/direct-title-lg.webp" alt="direct-title-md" class="hidden lg:block" />
      </div>

      <div class="flex flex-col px-4 md:grid grid-cols-4 md:px-20 lg:px-0 gap-3">
        @for (card of gridCardCss; track card.id) {
          <app-card-item [card]="card" />
        }
      </div>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainer {
  gridCardCss = [
    {
      id: 1,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: 'Dream Plaza 信義店',
      address: '臺北市信義區松高路11號3樓📍',
      phone: '02-2725 1317',
      open: [
        { id: 1, day: '週日～週四 / 11:00-21:30' },
        { id: 2, day: '週五～週六 / 11:00-22:00' },
      ],
    },
    {
      id: 2,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '台北LaLaport南港店',
      address: '臺北市南港區經貿二路131號2F📍',
      phone: '02-2783 0328',
      open: [
        { id: 1, day: '週日～週四 / 11:00-21:30' },
        { id: 2, day: '週五～週六 / 11:00-22:00' },
      ],
    },
    {
      id: 3,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '朝陽里海生活店',
      address: '宜蘭縣蘇澳鎮朝陽路88-1號📍',
      phone: '03-998 2588',
      open: [
        { id: 1, day: '週一～週日 / 10:00-18:00' },
        { id: 2, day: '週三 / 公休' },
      ],
    },
    {
      id: 4,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '品牌概念店－永康概念店',
      address: '臺北市大安區永康街11-1號1樓📍',
      phone: '02-2395 5877',
      open: [{ id: 1, day: '週一～週日 / 10:30-21:30' }],
    },
    {
      id: 5,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '京站時尚廣場－台北京站店',
      address: '臺北市大同區承德路一段1號B1📍',
      phone: '02-2559 0707',
      open: [
        { id: 1, day: '週日～週四 / 11:00-21:30' },
        { id: 2, day: '週五～週六 / 11:00-22:00' },
      ],
    },
    {
      id: 6,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '誠品生活專櫃－松菸店',
      address: '臺北市信義區菸廠路88號2樓📍',
      phone: '02-6636 5888#1653',
      open: [{ id: 1, day: '週一～週日 / 11:00-22:00' }],
    },
    {
      id: 7,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '誠品生活專櫃－南西店',
      address: '臺北市中山區南京西路14號2樓📍',
      phone: '02-2582 3358 #1204',
      open: [
        { id: 1, day: '週日～週四 / 11:00-22:00' },
        { id: 2, day: '週五～週六 / 11:00-22:30' },
      ],
    },
    {
      id: 8,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '誠品生活專櫃－新店裕隆城',
      address: '新北市新店區中興路三段70號2樓📍',
      phone: '02-2910 6016',
      open: [
        { id: 1, day: '週日～週四 / 11:00-21:30' },
        { id: 2, day: '週五～週六 / 11:00-22:00' },
      ],
    },
    {
      id: 9,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '遠東巨城購物中心專櫃',
      address: '新竹市東區中央路229號1樓玻璃屋📍',
      phone: '03-532 1553',
      open: [
        { id: 1, day: '週日～週四 / 11:00-21:30' },
        { id: 2, day: '週五～週六 / 11:00-22:00' },
      ],
    },
    {
      id: 10,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '誠品綠園道－勤美店',
      address: '臺中市西區公益路68號2樓📍',
      phone: '04-2328 0032',
      open: [
        { id: 1, day: '週日～週四 / 11:00-21:30' },
        { id: 2, day: '週五～週六 / 11:00-22:00' },
      ],
    },
    {
      id: 11,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '高雄夢時代專櫃',
      address: '高雄市前鎮區中華五路789號3樓📍',
      phone: '07-812 0560',
      open: [
        { id: 1, day: '週一～週四 / 11:00-22:00' },
        { id: 2, day: '週五、假日前一天 / 11:00-22:30' },
        { id: 3, day: '週六、連續假日 / 10:30-22:30' },
        { id: 4, day: '週日、假日 / 10:30-22:00' },
      ],
    },
    {
      id: 12,
      img: '/direct-image.png',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
      title: '漢神百貨專櫃－巨蛋店',
      address: '高雄市左營區博愛二路777號B1📍',
      phone: '07-522 6661',
      open: [
        { id: 1, day: '週日～週四 / 11:00-22:00' },
        { id: 2, day: '週五～週六 / 11:00-22:30' },
      ],
    },
  ];
}
