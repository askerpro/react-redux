export interface GalleryItem {
  images: string[];
  location: string;
  profile?: string;
  lamination?: string;
  glass?: string;
  date: string;
}

const items: GalleryItem[] = [
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/67954587_167910117677831_1703618427854352244_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=VJMZZQThw1wAX9LaDgf&oh=18c27f0e0af04fb158107c1e7af049fb&oe=5EABB20D',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/67841186_1357507201068030_3990194019527660300_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=106&_nc_ohc=1HE0DVxCkgEAX_jfgPa&oh=2ad14f2d2a74e2b4bdf11a1144e367f1&oe=5EA84A1F',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/67264549_159332398574974_5705921202085399928_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=nYcnq6_d-SwAX9DYG3S&oh=032da088d403f7b8320b8348cd1c1591&oe=5EA9544F',
    ],
    date: '23.10.2019',
    location: 'Черкесск',
    lamination: 'Орех',
    profile: 'Lite 70',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/66017597_2597832776914545_8208631062318017988_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=cq34_TheG7MAX9oTezE&oh=654d3d1e8b3f93c83ff8a41a74679dc7&oe=5EAB6872',
    ],
    date: '12.09.2019',
    location: 'Нальчик',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/66658856_158620231930084_8490322848088084910_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=TjwmEhJCzmsAX-0YVvX&oh=cf7d11f53e4152634f23ea4d824275ea&oe=5EAABA15',
      'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/66047091_183176809351572_8692927010357536869_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=4xeBpZ3xoPQAX9fhHqu&oh=52cd0099eb2156189c8c4567f3205908&oe=5EABC0D6',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/66604284_446069932912638_8147998689372412140_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=106&_nc_ohc=Qd-Xg8UKbJMAX9z_rD9&oh=2b0619e83123d2437e2bdbb76d90566b&oe=5EA8AC4C',
    ],
    date: '30.11.2019',
    location: 'Пятигорск',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/65734591_445541646226614_7951035144657113618_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=106&_nc_ohc=hCRJm03hNEkAX8Jbsn1&oh=73afdf804791aa255fe9c012c7be49b6&oe=5EA8F582',
    ],
    date: '6.09.2019',
    location: 'Нальчик',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/66111344_429572224304625_3329822536312780587_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=naqBv7bmCTUAX8m4sE-&oh=96aea0897e619a4653eb02004b7a2fc1&oe=5EA91C94',
    ],
    date: '25.09.2019',
    location: 'Владикавказ',
  },
  {
    images: [
      'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/64878741_359293831654693_3490922773819445348_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=IjwQTnjxdRAAX-_6WO5&oh=e28d8f7f3e111ef9fa7774825d95f6fc&oe=5EAB70E5',
    ],
    date: '25.09.2019',
    location: 'Залукокоаже',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/69860169_1471386326396645_5866885156570710574_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=105&_nc_ohc=HGKoww3mF2gAX_3JT2D&oh=db4c37599b70248773d0a652c68fac9c&oe=5EAAAAD3',
    ],
    date: '5.11.2019',
    location: 'Баксан',
    lamination: 'Орех',
    profile: 'Silver Eco',
  },
  {
    images: [
      'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/69555085_919643648401647_2067365934930084954_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=3QUy3w3vfKIAX_sf28L&oh=79437ee7ab93f477775098fbb4fe1a47&oe=5EAA2C2D',
    ],
    date: '29.10.2019',
    location: 'Назрань',
    profile: 'Silver Eco premium',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/69359160_113645160013120_4144946815970131330_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=W4O9S-Hml3UAX9CT6Rw&oh=727295b5296598a23b026934f82c8698&oe=5EA9AC03',
    ],
    date: '4.11.2019',
    location: 'Нартан',
    lamination: 'Золотой дуб',
    profile: 'Шуко Премиум',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/68818724_729635870797904_4141977718578152559_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=108&_nc_ohc=p5W8YPMz-JIAX9g2mhW&oh=4e4b016798a8bd007786ac5cb5dcb6db&oe=5EA897FA',
    ],
    date: '9.11.2019',
    location: 'Баксан',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/88148487_700299750800793_4648884885332701988_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=UYtIUcDYv2IAX_05TM6&oh=8a6066f0c6b2381c5010ca39c4f97e60&oe=5EA9A4E6',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90954765_2673518189547981_6827186883925555093_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=qRAhc85T5gUAX_2MndO&oh=f96083f1b023957eab944f9715c31f27&oe=5EAA31FE',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90392924_230341538108767_9190247032728794329_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=107&_nc_ohc=-xTg12B9KWkAX_fl5ac&oh=cd0ded0f3510b1c6c88e6f49458f9cf5&oe=5EAB73FB',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/91079888_205070047386244_4053033090218964747_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=I8jVPPZKlIwAX-Ouq-k&oh=e77b90bf985edbf96edb34f936a8bb76&oe=5EA98F1F',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90885175_512301026148119_6881110861774585169_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=_8opYY_dl-4AX8WNQWj&oh=9ff0ddd60aee114bf5a9252519ce60d2&oe=5EA987E3',
      'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/90671075_2515552948684839_7704475652605079007_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=vBn3iJLUM1UAX-ebGj9&oh=60e356963f463f68db7dd5d7e73a51b0&oe=5EA8D251',
    ],
    location: 'Пятигорск',
    profile: 'Schuco Premium',
    lamination: 'Античная сосна',
    glass: 'Thermos+',
    date: '23.03.2020',
  },
  {
    images: [
      'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/90089555_155266462707049_7631256425564008592_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=Ro_R-BX5dAwAX-XbkCG&oh=fbf57b06b9c041f8a43ee199a01a7faa&oe=5EA8189F',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90049125_633943707426728_3261016474521121391_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=108&_nc_ohc=xWMluHFPTuMAX-SaBiR&oh=cc8636e96093e32c76fbc99e350d7b0d&oe=5EA81728',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90223018_1054347974923386_5437711294284591538_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=106&_nc_ohc=jbmbOgh_z2kAX821fkC&oh=501df80268b19527dcfced463e3c150f&oe=5EA99C51',
      'https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/90091736_234772964366630_2005553200435101984_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Rg9-wjCfqB0AX8gyhcd&oh=86e7c678563d11d0253e0effe4e816b4&oe=5EA9F279',
    ],
    profile: 'Silver Eco Premium',
    lamination: 'Болотный дуб',
    glass: 'Двухкамерный, энергосберегающий.',
    date: '23.03.2020',
    location: 'Черкесск',
  },
  {
    images: [
      'https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/90030593_604391086955822_3794277273577065897_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=ncM17r1Do-cAX-JCglA&oh=0fc02f000469c8a276975b0df3a0df04&oe=5EAB191F',
      'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/89954117_217029012983148_5787457221721431290_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=HSR8UMNai2wAX_BUznI&oh=120d95682adf61fe6c5517b877fdd9da&oe=5EAA9069',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/83271739_1568364900006622_3421157404453577652_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=10akx4Wa6gcAX9gSOJN&oh=ef496390769e617c873ff1ef1bb868e9&oe=5EAA7277',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/89968683_348008296110082_7446307645143180838_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=b0jxmz8-C14AX8jZBqj&oh=115c19604f1cfe038ee4e5fd61a598b1&oe=5EA9DB3E',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90084710_151524869657864_2554485398219710688_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=108&_nc_ohc=tel-GhUY9t0AX_5vMHl&oh=8acb5180f2ed77a77792dbcbf0d10160&oe=5EAAABCB',
    ],
    profile: 'Schuco Premium',
    lamination: 'Болотный дуб',
    glass: 'Двухкамерный, энергосберегающий.',
    date: '23.03.2020',
    location: 'Черкесск',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/89774726_651829928949821_7188278530913265506_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=105&_nc_ohc=egi00cuPFboAX_P1_f7&oh=d195e66ab1ba0e4bd75c88f7b054b974&oe=5EAA3B29',
    ],
    profile: 'Теплый алюминий ALT W-62',
    lamination: 'Золотой дуб',
    glass: 'Термос бронза',
    date: '16.03.2020',
    location: 'Черкесск',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/89849845_3031923973493363_7563971798557871950_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=aOo5vUynGoQAX-TJ6zx&oh=ea2ef3aefb3d30ecf0ad151c2fc8b5ba&oe=5EAAF9C7',
      'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/89369467_225800082121947_810877293487908064_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=qz4FXTE0EJ4AX_tKRNb&oh=9cc72e5341140e82706bc0e4ffb64956&oe=5EAB4F92',
    ],
    profile: 'Теплый алюминий ALT C-48',
    date: '13.03.2020',
    location: 'Черкесск',
  },
  {
    images: [
      'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/82744952_2341131612652921_5758341535590720850_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=JvxofVgWF4kAX8ptWsW&oh=9e7c7fb157fb4d14a01fa5c64f198637&oe=5EAB5310',
    ],
    profile: 'Теплый алюминий ALT C-72',
    date: '4.02.2020',
    location: 'Исламей',
    lamination: 'Золотой Дуб',
    glass: 'Термос дизайн бронза',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/73512805_2596795153888827_475163825955925574_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=103&_nc_ohc=4DI8r2dbuC8AX8iq2Q0&oh=69c0f8bf7ed22054820b618c8bdf90c0&oe=5EA903B6',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/74891097_160827525271855_1767996380779492319_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=107&_nc_ohc=8QDbHDjy1sEAX9kD53K&oh=20c317ff2dbbf8470398a2b7b91b2c22&oe=5EABC64B',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/74676925_259561091671097_4555503562544504398_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=105&_nc_ohc=AAo-EfsjFWsAX-VMWW5&oh=ea536031faee5ae9af2339ba188ed59b&oe=5EA8A808',
    ],
    profile: 'Берта Сильвер ЭКО',
    date: '15.12.2019',
    location: 'Исламей',
    lamination: 'Болотный дуб',
    glass: 'Термос дизайн бронза',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/70905145_406424133373271_4624332645649441077_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=bSDpGCYs5kQAX8jRpBI&oh=12e6d4748562c24de525ee6e52355c6b&oe=5EA9E5B7',
      'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/71286375_988820651477616_6051799033229042751_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=BfTRfBmOWlwAX87A4no&oh=8114a47521b6a33507aeb080fbd67362&oe=5EA96921',
    ],
    profile: 'Берта Сильвер ЭКО',
    date: '17.11.2019',
    location: 'Аргудан',
    glass: 'Термос дизайн бронза',
  },
  {
    images: [
      'https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/71773376_246089029657418_8683765071130559958_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=d8YpQiHC3rsAX_ISe9W&oh=3461be80567029802271deb9a51bf145&oe=5EAB0D81',
    ],
    date: '5.11.2019',
    location: 'Грозный',
  },
  {
    images: [
      'https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/69216005_2497453973633496_8693410517385459574_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=JnJwT8sWaNsAX8RANcp&oh=132998c8d2091f46c2e1d089b5e8bafd&oe=5EAB7F07',
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/69858114_161658658283321_787814088080816698_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=105&_nc_ohc=QM9WcVqioJcAX_ZqHxy&oh=e624e36e62b4586c64cf9e5d5ffc49ee&oe=5EA834B0',
    ],
    date: '18.11.2019',
    location: 'Псынодаха',
  },
  {
    images: [
      'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/69690641_2886107428122526_3868336186891968435_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=110&_nc_ohc=K7PZeLw_RlAAX8-ez-V&oh=8325b58b8fb45f80a301caf876cdc64e&oe=5EAA89FB',
    ],
    date: '18.11.2019',
    location: 'Аргудан',
  },
];

export default items;
