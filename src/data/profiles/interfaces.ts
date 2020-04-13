export enum ProfileVisualParams {
  WARM,
  DESIGN,
  COMFORT,
}

export interface ProfileVisualParamValues {
  visualParamValues: {
    [ProfileVisualParams.WARM]: number;
    [ProfileVisualParams.DESIGN]: number;
    [ProfileVisualParams.COMFORT]: number;
  };
}

export interface ProfileParamData {
  name: string;
  description: string;
  units?: string;
  image?: string;
}

export interface SpecificationData extends ProfileParamData {
  values: string[];
}

export interface Texture {
  image: string;
  size: { w: number; h: number };
  [x: string]: any;
}
