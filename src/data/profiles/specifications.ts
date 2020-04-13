import { SpecificationData, ProfileParamData } from './interfaces';

export enum Specifications {
  MONTAGE_DEEP,
  AIR_CHAMBERS,
  ARM_THICKNESS,
  PLASTIC_THICKNESS,
  LAMINATION,
  GLASS_WIDTH,
  SEALANTS,
  SHTAPICKS,
}

const data: ProfileParamData[] = [
  {
    name: 'Монтажная глубина',
    description:
      'Ширина профиля или так называемая “монтажная глубина” отвечает за количество воздушных камер профиля. Чем шире профиль, тем больше камер там будет и соответственно, тем выше будут тепло и звукоизоляционные свойства профиля',
    units: 'mm',
  },
  {
    name: 'Воздушные камеры',
    description:
      'В пластиковом профиле всегда есть полости — они нужны для звуко- и теплоизоляции. Минимальное количество таких камер — три, но в дорогих окнах может быть пять и более камер.',
  },
  {
    name: 'Толщина армирования',
    description:
      'Проиводство: Турция. Одна из лучших фурнитур в своем классе с тройной противокорозийной защитой.',
    units: 'mm',
  },
  {
    name: 'Толщина внешних стенок',
    description:
      'От толщины стенок зависят многие прочностные свойства окна: прочность сварных углов соединений, надежность крепления фурнитуры, ударостойкость и прочность поверхности. Все это влияет на долговечность изделия.',
    units: 'mm',
  },
  {
    name: 'Возможность ламинации',
    description: 'Ламинация пластиковых окон позволяет придать им нужный декоративный вид.',
  },
  {
    name: 'Толщина стеклопакета',
    units: 'mm',
    description:
      'Для теплого климата, комнат, ориентированных на юг, и кухонь, где температура почти всегда выше, чем в других местах, подойдут стандартные двухкамерные стеклопакеты.',
  },
  {
    name: 'Уплотнители',
    description:
      'Хорошие окна ПВХ имеют как минимум два контура уплотнения. Уплотнители делают из разных материалов, но лучшим считается натуральный каучук, стойкий к перепадам температур.',
  },
  {
    name: 'Штапики',
    description: 'Перечень возможных штапиков, которые можно установить на эту профильную систему.',
  },
];

class ProfileSpecificationData implements SpecificationData {
  name: string;

  description: string;

  units?: string;

  values: string[];

  constructor(type: Specifications, _values: string[]) {
    this.name = data[type].name;
    this.description = data[type].description;
    this.units = data[type].units;
    this.values = _values;
  }
}

export default ProfileSpecificationData;
