import { Equipment, EquipmentData } from './interfaces';
import { ProfileVisualParams } from '../profiles/interfaces';

export enum Sealants {
  EPDM_GRAY,
  EPDM_BLACK,
}

export const data: Equipment[] = [
  {
    name: 'EPDM Серый',
    description: '',
    icon: '/static/images/equipments/sealants/epdm_grey.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
  {
    name: 'EPDM Черный',
    description: '',
    icon: '/static/images/equipments/sealants/epdm_black.jpg',
    visualParamValues: {
      [ProfileVisualParams.WARM]: 0,
      [ProfileVisualParams.DESIGN]: 0,
      [ProfileVisualParams.COMFORT]: 0,
    },
  },
];

class SealantEqipmentData implements EquipmentData {
  name = 'Уплотнитель';

  image = '/static/images/profiles/sealants/overview.jpg';

  description =
    'Обеспечивают герметичность изделия, и влияют на тепло и шумо-изоляцию, на защиту от пыли и влаги.';

  data: Equipment[];

  constructor(availableList: Sealants[]) {
    this.data = availableList.map((name) => data[name]);
  }
}

export default SealantEqipmentData;
