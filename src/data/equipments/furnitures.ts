import { Equipment, EquipmentData } from './interfaces';
import { ProfileVisualParams } from '../profiles/interfaces';

export enum Furnitures {
  SCHUCO_VARIOTECK,
  INTERNIKA,
  VORNE,
}

export const data: Equipment[] = [
  {
    name: 'Schuco Vario Tec',
    description: 'Фурнитура от немецкого производителя с отличными свойствами.',
    icon: '/static/images/equipments/furnitures/schuco-variotec.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'Internika',
    description:
      'Европейская фурнитура. Производство: Словения. С плавным ходом и повышенной износостойкостью.',
    icon: '/static/images/equipments/furnitures/maco.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'Vorne',
    description:
      'Проиводство: Турция. Одна из лучших фурнитур в своем классе с тройной противокорозийной защитой.',
    icon: '/static/images/equipments/furnitures/maco.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
];

class FurnitureEqipmentData implements EquipmentData {
  name = 'Фурнитура';

  description =
    'Фурнитура имеет значение не меньшее, чем сам профиль. Каким бы энергосберегающим и эстетичным не был профиль - если ручки не закрываются, механизм заедает и створка не двигается, то очень скоро вы пожалете, что сэкономили на окне.';

  data: Equipment[];

  constructor(availableList: Furnitures[]) {
    this.data = availableList.map((name) => data[name]);
  }
}

export default FurnitureEqipmentData;
