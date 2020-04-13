import { Equipment, EquipmentData } from './interfaces';
import { ProfileVisualParams } from '../profiles/interfaces';

export enum Shtapicks {
  ANTIK,
  SQUARED,
  CIRCLE,
  FACETED,
}

export const data: Equipment[] = [
  {
    name: 'Антик',
    description: '',
    icon: '/static/images/equipments/shtapicks/antik.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'Квадратные',
    description: '',
    icon: '/static/images/equipments/shtapicks/squared.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'Круглые',
    description: '',
    icon: '/static/images/equipments/shtapicks/circle.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'Граненный со скосом',
    description: '',
    icon: '/static/images/equipments/shtapicks/figured.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
];

class ShtapickEqipmentData implements EquipmentData {
  name = 'Штапик';

  description =
    'Это конструктивный элемент пластиковых оконных профилей, который обеспечивает прочную фиксацию стеклопакета в оконной раме.';

  data: Equipment[];

  constructor(availableList: Shtapicks[]) {
    this.data = availableList.map((name) => data[name]);
  }
}

export default ShtapickEqipmentData;
