import { Equipment, EquipmentData } from './interfaces';
import { ProfileVisualParams } from '../profiles/interfaces';

export enum Handles {
  HOPPE,
  BERTA_STANDART,
  HANDLE_WITH_LOCK,
  BERTA_ACUSTIC,
  ANTIBAKTERIAL,
}

export const data: Equipment[] = [];

data[Handles.HOPPE] = {
  name: 'Hoppe',
  description: 'Европейская ручка с классическим, элегантным внешним видом.',
  icon: '/static/images/equipments/handles/hoppe.jpg',
  visualParamValues: {
    [ProfileVisualParams.WARM]: 0,
    [ProfileVisualParams.DESIGN]: 0,
    [ProfileVisualParams.COMFORT]: 0,
  },
};

data[Handles.BERTA_STANDART] = {
  name: 'Berta Standart',
  description: 'Ручка с логотипом "Берта". Производится в Германии.',
  icon: '/static/images/equipments/handles/standart.jpg',
  visualParamValues: {
    [ProfileVisualParams.WARM]: 0,
    [ProfileVisualParams.DESIGN]: 0,
    [ProfileVisualParams.COMFORT]: 10,
  },
};
data[Handles.HANDLE_WITH_LOCK] = {
  name: 'Ручка с замком',
  description: 'Ручка Берта с замком.',
  icon: '/static/images/equipments/handles/protected.jpg',
  visualParamValues: {
    [ProfileVisualParams.WARM]: 0,
    [ProfileVisualParams.DESIGN]: 0,
    [ProfileVisualParams.COMFORT]: 14,
  },
};
data[Handles.BERTA_ACUSTIC] = {
  name: 'Berta acustic',
  description: 'Специальная ручка с акустическим эффектом.',
  icon: '/static/images/equipments/handles/hoppe.jpg',
  visualParamValues: {
    [ProfileVisualParams.WARM]: 0,
    [ProfileVisualParams.DESIGN]: 0,
    [ProfileVisualParams.COMFORT]: 20,
  },
};
data[Handles.ANTIBAKTERIAL] = {
  name: 'Berta Antibakterial',
  description: 'Элегентная ручка с антибактериальным покрытием.',
  icon: '/static/images/equipments/handles/hoppe.jpg',
  visualParamValues: {
    [ProfileVisualParams.WARM]: 0,
    [ProfileVisualParams.DESIGN]: 0,
    [ProfileVisualParams.COMFORT]: 20,
  },
};

class HandlesEqipmentData implements EquipmentData {
  name = 'Ручка';

  description = 'Перечень ручек, которые можно установить на эту профильную систему.';

  data: Equipment[];

  constructor(availableList: Handles[]) {
    this.data = availableList.map((name) => data[name]);
  }
}

export default HandlesEqipmentData;
