import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

interface Destinations {
  placeName: string;
  image: string;
  description: string;
  id: number;
  detailImg: string;
}

@Component({
  standalone: true,
  imports: [NzModalModule, NgStyle],
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  isModal = signal<boolean>(false);
  activeCard = new Set<number>();

  destinationList: Destinations[] = [
    {
      placeName: 'ДУБАЙ',
      image: 'assets/images/dubai.png',
      description: `Город и эмират на побережье Персидского заливав Объединенных Арабских Эмиратах, который славится своими роскошными магазинами, ультрасовременной архитектурой, ресторанами и ночными клубами.Силуэт города формируют бесчисленные небоскребы,в том числе Бурдж- Халифа высотой 830 метров.У его основания расположен музыкальный фонтан "Дубай", подсвеченный прожекторами. На искусственном острове рядом с побережьем находится курорт Atlantis The Palm с аквапарком и парком морских животных.`,
      id: 0,
      detailImg: 'assets/images/dubai_p.png',
    },
    {
      placeName: 'АНТАЛИЯ',
      image: 'assets/images/antalia.png',
      description: `Kурортный и 
портовый город  на юге Турции 
на берегу Средиземного  моря, административный 
центр провинций Анталья.Постоянное население
города — 1,5 миллиона человек при этом в летний 
период число  фактически находящихся в
городе людей может превышать 2 миллиона 
из-за Активного туристического
потока`,
      id: 1,
      detailImg: 'assets/images/antalia_desc.png',
    },
    {
      placeName: 'ТАИЛАНД',
      image: 'assets/images/tailand.png',
      description: `Oфициальное
название —  Короле́вство Таила́нд, до 193
9 и в 1945—1949 годах Сиам —государство
в Юго-Восточной-Азии расположен
ное в юго-западной части полуострова Индокитай 
и в северной части полуостров а Малакка.`,
      id: 2,
      detailImg: 'assets/images/tayland_desc.png',
    },
    {
      placeName: 'МАЛЬДИВЫ',
      image: 'assets/images/maldiviya.png',
      description: `
          Тропическое государство в Индийском океане, расположенное 
          на 26 кольцевидных атоллах, которые состоят из более чем
          тысячи коралловых островов. Оно славится своими пляжами,
          голубыми лагунами и огромными рифами. В столице страны 
          Мале стоит посетить оживленный рыбный рынок, 
          рестораны и магазины на главной дороге Меджеде-Магу,
          з также мечеть Хукуру-Миский
          (Пятничная мечеть), фундамент и стены которой украшены
          резьбой по белому кораллу.`,
      id: 3,
      detailImg: 'assets/images/maldiva_desc.png',
    },
    {
      placeName: 'ГОА',
      image: 'assets/images/goa.png',
      description: `
Хотя фраза "отдых на пляжах Индии"
может прозвучать как парадокс,  песчаное побережье 
Гоа просто создано для того, чтобы полежать 
на берегу моря. Устройтесь поудобнее 
в мягком кресле у закусочной на пляже и
посмакуйте блюдо, приправленное соусом карри, 
запивая его пивом "Кингфишер" и любуясь
тем, как солнце лениво ползет к горизонту. Собор
Бон-Жесус, расположенный в Старом Гоа, входит в 
список Всемирного Наследия ЮНЕСКО и является 
прекрасным примером барочной архитектуры.
`,
      id: 4,
      detailImg: 'assets/images/goa_desc.png',
    },
    {
      placeName: 'ШАРМ-ЭШ-ШЕЙХ',
      image: 'assets/images/sharm-esh-shayx.png',
      description: `
Курортный город в Египте, расположенный между пустыней 
Синайского полуострова и Красным морем. Шарм-эль-Шейх
славится своими тихими песчаными пляжами, чистой водой
и коралловыми рифами. Среди туристов популярен залив 
Наама, вдоль которого тянется окаймленная пальмами 
набережная с множеством баров и ресторанов. 
Ещё одно известное место - парк Рас-Мохаммед, 
который особенно привлекает любителей дайвинга.
Здесь можно поплавать рядом с ватонувшим 
кораблем "Тистлегорм" и посмотреть на рифы Шарк и Иоланда.`,
      id: 6,
      detailImg: 'assets/images/sharm_desc.png',
    },
    {
      placeName: 'ИСТАНБУЛ',
      image: 'assets/images/istanbul.png',
      description: `Kрупнейший город Турции,
 экономический, исторический и культурный центр
страны. Является также центром 
Мраморноморского региона —  самого западного из 
географических cтраны..  Стамбул, где проживают 
свыше 15 млн человек, является одним 
из самых населённых городов мира.
В 1923 году, после Войны за независимость 
Турции новой столицей страны стала Анкара`,
      id: 7,
      detailImg: 'assets/images/istanbul_desc.png',
    },
    {
      placeName: 'ГРУЗИЯ',
      image: 'assets/images/gruziya.png',
      description: `Государство, расположенное в западной 
частиЗакавказья навосточном побережье Чёрного 
моря. Относится к Восточной Европе и  Передней
Азии;Население, по итогам официальнойпереписи
2014 года, составляет 3 7138 04 человека
(по оценочным данным  на начало 
2023 года — 3 736 400 человека  территория — 69 700км².
Занимает130-е место в мире по численности
населения и  119-е по территории. Столица —Тбилиси.`,
      id: 8,
      detailImg: 'assets/images/gruziya_desc.png',
    },
  ];

  onSelect(index: number): void {
    this.activeCard.clear();
    this.activeCard.add(index);
    this.isModal.set(true);
  }
}
