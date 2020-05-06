/* eslint-disable global-require */
import { data as HandlesData, Handles } from 'data/equipments/handles';
import { data as GlassesData, Glasses } from 'data/equipments/glasses';

import { data as FurnituresData, Furnitures } from 'data/equipments/furnitures';
import ProfilesData, { Profiles } from 'data/profiles';
import { Product, ProductTypeVariant } from '../interfaces';

export enum Variants {
  ONE_SASH,
  TWO_SASH,
  THREE_SASH,
}

export const productTypeVariants: ProductTypeVariant[] = [];

productTypeVariants[Variants.ONE_SASH] = {
  name: 'Одностворчатое',
  img: require('./img/window_10001.jpg'),
};
productTypeVariants[Variants.TWO_SASH] = {
  name: 'Двухстворчатое',
  img: require('./img/window_20001.jpg'),
};

productTypeVariants[Variants.THREE_SASH] = {
  name: 'Трехстворчатое',
  img: require('./img/window_30001.jpg'),
};

const products: Product[] = [
  {
    name: productTypeVariants[Variants.ONE_SASH].name,
    img: productTypeVariants[Variants.ONE_SASH].img,
    oldprice: '3450р',
    price: 'от 2850р/м2',
    size: {
      width: 1200,
      height: 1300,
    },
    equipment: {
      profile: ProfilesData[Profiles.BERTA_SILVER_ECO_CLASSIC],
      glass: GlassesData[Glasses.STANDART],
      furniture: FurnituresData[Furnitures.INTERNIKA],
      handle: HandlesData[Handles.HOPPE],
    },
    extras: {
      sill: false,
      slope: false,
      tide: false,
      mosqutoNet: false,
    },
  },
  {
    name: productTypeVariants[Variants.TWO_SASH].name,
    img: productTypeVariants[Variants.TWO_SASH].img,
    oldprice: '3450р',
    price: 'от 2850р/м2',
    size: {
      width: 1200,
      height: 1300,
    },
    equipment: {
      profile: ProfilesData[Profiles.BERTA_SILVER_ECO_CLASSIC],
      glass: GlassesData[Glasses.STANDART],
      furniture: FurnituresData[Furnitures.INTERNIKA],
      handle: HandlesData[Handles.HOPPE],
    },
    extras: {
      sill: false,
      slope: false,
      tide: false,
      mosqutoNet: false,
    },
  },

  {
    name: productTypeVariants[Variants.THREE_SASH].name,
    img: productTypeVariants[Variants.THREE_SASH].img,
    oldprice: '3450р',
    price: 'от 2850р/м2',
    size: {
      width: 1200,
      height: 1300,
    },
    equipment: {
      profile: ProfilesData[Profiles.BERTA_SILVER_ECO_CLASSIC],
      glass: GlassesData[Glasses.STANDART],
      furniture: FurnituresData[Furnitures.INTERNIKA],
      handle: HandlesData[Handles.HOPPE],
    },
    extras: {
      sill: false,
      slope: false,
      tide: false,
      mosqutoNet: false,
    },
  },
];

export default products;
