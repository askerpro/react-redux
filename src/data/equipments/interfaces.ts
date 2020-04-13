import { ProfileVisualParamValues, ProfileParamData } from '../profiles/interfaces';

export interface EquipmentBase {
  name: string;
}

export interface Equipment extends EquipmentBase, ProfileVisualParamValues {
  description: string;
  icon: string;
}

export interface EquipmentData extends ProfileParamData {
  data: Equipment[];
}
