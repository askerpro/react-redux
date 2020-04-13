/* eslint-disable global-require */
import { data as HandlesData, Handles } from 'data/equipments/handles';
import { data as GlassesData, Glasses } from 'data/equipments/glasses';

import { data as FurnituresData, Furnitures } from 'data/equipments/furnitures';
import ProfilesData, { Profiles } from 'data/profiles';
import { Product, ProductTypeVariant } from '../interfaces';

export enum Variants {
  ONE_SASH,
  TWO_SASH,
}

export const productTypeVariants: ProductTypeVariant[] = [];

productTypeVariants[Variants.ONE_SASH] = {
  name: 'Одностворчатый',
  img: require('./img/1.jpg'),
};
productTypeVariants[Variants.TWO_SASH] = {
  name: 'Двухстворчатый',
  img: require('./img/2.jpg'),
};

const products: Product[] = [
  {
    name: productTypeVariants[Variants.ONE_SASH].name,
    img: productTypeVariants[Variants.ONE_SASH].img,
    oldprice: '11 542р.',
    price: '9 619р.',
    size: {
      width: 1200,
      height: 1300,
    },
    equipment: {
      profile: ProfilesData[Profiles.BERTA_LITE],
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
    oldprice: '8 941р.',
    price: '7 451р.',
    size: {
      width: 1200,
      height: 1300,
    },
    equipment: {
      profile: ProfilesData[Profiles.BERTA_LITE],
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
