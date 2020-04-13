import { ProductType, ProductTypeVariant } from './interfaces';

import { productTypeVariants as windowProductTypeVariants } from './windows';
import { productTypeVariants as doorsProductTypeVariants } from './doors';
import { productTypeVariants as balconiesProductTypeVariants } from './balconies';

const products: ProductTypeVariant[][] = [];

products[ProductType.WINDOW] = windowProductTypeVariants;
products[ProductType.DOOR] = doorsProductTypeVariants;
products[ProductType.DOOR_WINDOW] = balconiesProductTypeVariants;
export default products;
