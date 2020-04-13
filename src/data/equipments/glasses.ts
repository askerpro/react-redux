import { Equipment, EquipmentData } from './interfaces';
import { ProfileVisualParams } from '../profiles/interfaces';

export enum Glasses {
  STANDART,
  TERMOS,
  ENERGO,
}

export const data: Equipment[] = [
  {
    name: 'Стандарт',
    description: 'Стандартный стеклопакет. Соответствует ГОСТ стандарту. Ничего лишнего.',
    icon: '/static/images/equipments/glasses/standart.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'Термос+',
    description:
      'Данный стеклопакет был изготовлен специально для компании “ОКНА БЕРТА” и по своим потребительским качествам является, пожалуй, одним из лучших продуктов на рынке. Так-же вы можете выбрать оттенок наружнего стекла, что позволит воплатить ваши идеи по оформлению фасада.',
    icon: '/static/images/equipments/glasses/thermos.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 10,
      [ProfileVisualParams.DESIGN]: 10,
      [ProfileVisualParams.COMFORT]: 10,
    },
  },
  {
    name: 'Энергосберегающий',
    description:
      'Обладает повышенными свойствами энергосбережения, что позволяет эффективнее сохранять тепло вашего дома.',
    icon: '/static/images/equipments/glasses/thermos.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 10,
      [ProfileVisualParams.DESIGN]: 10,
      [ProfileVisualParams.COMFORT]: 10,
    },
  },
];

class GlassesEqipmentData implements EquipmentData {
  name = 'Стеклопакет';

  description =
    'Для теплого климата, комнат, ориентированных на юг, и кухонь, где температура почти всегда выше, чем в других местах, подойдут стандартные двухкамерные стеклопакеты.';

  data: Equipment[];

  constructor(availableList: Glasses[]) {
    this.data = availableList.map((name) => data[name]);
  }
}

export default GlassesEqipmentData;
