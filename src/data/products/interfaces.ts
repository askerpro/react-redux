import { Props as ResponsiveImageProps } from 'utils/responsive-image';

import { ProfileData } from '../profiles';
import { Equipment } from '../equipments/interfaces';

export interface ProductSize {
  width: number;
  height: number;
}
export interface Product {
  price: string;
  size: ProductSize;
  img: ResponsiveImageProps;
  name?: string;
  oldprice?: string;
  equipment: {
    profile: ProfileData;
    glass: Equipment;
    handle: Equipment;
    furniture: Equipment;
  };
  extras: {
    sill: boolean;
    slope: boolean;
    mosqutoNet: boolean;
    tide: boolean;
  };
}

export enum ProductType {
  WINDOW,
  DOOR_WINDOW,
  DOOR,
}

export interface ProductTypeVariant {
  img: ResponsiveImageProps;
  name: string;
}
