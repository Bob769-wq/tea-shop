import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface GridItems {
  id: number;
  img: string;
  link: string;
}

@Component({
  selector: 'app-direct',
  imports: [RouterLink],
  template: `
    <section class="max-w-6xl m-auto">
      <div class="flex justify-center py-16">
        <h1
          class="border-b border-b-black inline-block pb-1 text-center font-medium text-4xl md:text-3xl lg:text-5xl tracking-widest"
        >
          茶籽堂直營門市
        </h1>
      </div>
      <div class="flex flex-col px-4 md:grid grid-cols-4 md:px-20 lg:px-0 gap-3">
        @for (card of gridCard; track card.id) {
          <div class="w-full">
            <a target="_blank" [href]="card.link">
              <img alt="" [src]="card.img" class="w-full aspect-[27/35]" />
            </a>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectComponent {
  gridCard: GridItems[] = [
    {
      id: 1,
      img: '/dream-plaza.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+Dream+Plaza+%E4%BF%A1%E7%BE%A9%E5%BA%97/@25.0397823,121.5654532,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab311ca03a59:0x840d38280f597906!8m2!3d25.0397823!4d121.5654532!16s%2Fg%2F11jn5n35rf?entry=tts&g_ep=EgoyMDI1MDcyMy4wIPu8ASoASAFQAw%3D%3D&skid=ca60bbdc-bc08-4123-a9b2-1949b18395c6',
    },
    {
      id: 2,
      img: '/lalaport.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E5%8F%B0%E5%8C%97LaLaport%E5%8D%97%E6%B8%AF%E5%BA%97/@25.0603419,121.615972,17z/data=!4m6!3m5!1s0x3442ad448c9cf4fd:0x4587658cfae4a15f!8m2!3d25.0593449!4d121.6175825!16s%2Fg%2F11mcmh551k?authuser=0&entry=tts&g_ep=EgoyMDI1MDQwOS4wIPu8ASoASAFQAw%3D%3D&skid=44d1999e-b26f-4962-8a5d-01a6717a601b',
    },
    {
      id: 3,
      img: '/yilan.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E6%9C%9D%E9%99%BD%E9%87%8C%E6%B5%B7%E7%94%9F%E6%B4%BB%E5%BA%97/@24.4609318,121.8140446,17z/data=!3m1!4b1!4m6!3m5!1s0x3467c5fa82d6b631:0xe5cd7e9d8370a883!8m2!3d24.4609318!4d121.8140446!16s%2Fg%2F11gnpr60pw?entry=tts',
    },
    {
      id: 4,
      img: '/yonkong.webp',
      link: 'https://www.google.com.tw/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E6%B0%B8%E5%BA%B7%E8%A1%97%E6%A6%82%E5%BF%B5%E5%BA%97/@25.0328176,121.5299007,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9d31ddf72b7:0x35c19c490ae57728!8m2!3d25.0328176!4d121.5299007!16s%2Fg%2F11fk961lcy?hl=zh-TW&coh=164777&shorturl=1&entry=tts',
    },
    {
      id: 5,
      img: '/kyo-station.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E5%8F%B0%E5%8C%97%E4%BA%AC%E7%AB%99%E5%BA%97/@25.0493128,121.5146186,17z/data=!3m2!4b1!5s0x36e69e5da7ac1ed9:0x4b4d95879c6110f9!4m6!3m5!1s0x3442a9df9df69661:0xf51dbfbbec59e553!8m2!3d25.049308!4d121.5171935!16s%2Fg%2F11vhclbtcj?authuser=0&entry=tts',
    },
    {
      id: 6,
      img: '/cigarette.webp',
      link: 'https://www.google.com.tw/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E6%9D%BE%E8%8F%B8%E8%AA%A0%E5%93%81%E5%BA%97/@25.0445662,121.5614467,17z/data=!3m2!4b1!5s0x3442abbf14b2fc5f:0x5d645d4ec1f735d7!4m6!3m5!1s0x3442abbf14624371:0xe3b3f2ac0aca6470!8m2!3d25.0445662!4d121.5614467!16s%2Fg%2F11f0kw23x8?hl=zh-TW&entry=tts',
    },
    {
      id: 7,
      img: '/south-west.webp',
      link: 'https://www.google.com.tw/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E5%8D%97%E8%A5%BF%E8%AA%A0%E5%93%81%E5%BA%97/@25.052187,121.5206641,17z/data=!3m2!4b1!5s0x3442a96eb1a06b9f:0x8cc38960222e04e7!4m6!3m5!1s0x3442a9f83b1ac8d9:0x312070abfe3330e8!8m2!3d25.052187!4d121.5206641!16s%2Fg%2F11gmy6qxq4?hl=zh-TW&coh=164777&shorturl=1&entry=tts',
    },
    {
      id: 8,
      img: '/new-taipei.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E8%AA%A0%E5%93%81%E8%A3%95%E9%9A%86%E5%9F%8E%E5%BA%97/@24.9779832,121.5465116,17z/data=!3m1!4b1!4m6!3m5!1s0x346801a15b58f441:0xc1b097afdcda60d2!8m2!3d24.9779832!4d121.5465116!16s%2Fg%2F11vbjy09h9?authuser=0&entry=tts',
    },
    {
      id: 9,
      img: '/wind-city.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E6%96%B0%E7%AB%B9%E5%B7%A8%E5%9F%8E%E5%BA%97/@24.8097245,120.9725323,17z/data=!3m1!4b1!4m6!3m5!1s0x3468354a1f05fdcf:0xd568442e5745c288!8m2!3d24.8097197!4d120.9751072!16s%2Fg%2F11q3ygpnpm?authuser=0&entry=tts&g_ep=EgoyMDI1MDMxOS4yIPu8ASoASAFQAw%3D%3D&skid=eb8ce8eb-0c95-4389-a153-5b623976cc84',
    },
    {
      id: 10,
      img: '/gun-city.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E5%8B%A4%E7%BE%8E%E8%AA%A0%E5%93%81%E5%BA%97/@24.1512806,120.6614224,17z/data=!3m2!4b1!5s0x34693da7ea2e65ff:0x4792dc28b3dab043!4m6!3m5!1s0x34693dd76162d36f:0x9a957815ab9bda7!8m2!3d24.1512757!4d120.6639973!16s%2Fg%2F11rtyh8cnk?authuser=0&entry=tts',
    },
    {
      id: 11,
      img: '/takao-dream.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E9%AB%98%E9%9B%84%E5%A4%A2%E6%99%82%E4%BB%A3%E5%BA%97/@22.5949041,120.2365735,13z/data=!4m7!3m6!1s0x346e032f80f6a633:0x397e3de05a48d2ad!8m2!3d22.5949041!4d120.3066113!15sChnojLbnsb3loIIg6auY6ZuE5aSi5pmC5LujIgOIAQGSAQVzdG9yZeABAA!16s%2Fg%2F11vwml7n4j?authuser=0&coh=209933&entry=tts',
    },
    {
      id: 12,
      img: '/takao-egg.webp',
      link: 'https://www.google.com/maps/place/%E8%8C%B6%E7%B1%BD%E5%A0%82+Cha+Tzu+Tang+-+%E6%BC%A2%E7%A5%9E%E5%B7%A8%E8%9B%8B%E5%BA%97/@22.6696627,120.2997153,17z/data=!3m2!4b1!5s0x346e0508af6f275f:0x5c95d0733851cbdf!4m6!3m5!1s0x346e054e283d08d3:0xd85fdf523a303243!8m2!3d22.6696578!4d120.3022902!16s%2Fg%2F11qgyx95s4?authuser=0&entry=tts',
    },
  ];
}
