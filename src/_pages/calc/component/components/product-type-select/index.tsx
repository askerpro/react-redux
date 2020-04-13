import React from 'react';
import { ProductType } from 'data/products/interfaces';
import products from 'data/products';

import ProductSelectTemplate from '../product-select-template';

export const productTitles = ['Пластиковое окно', 'Балконный блок', 'Пластиковая дверь'];

export interface Props {
  activeType: ProductType;
  onChange(activeType: number): void;
}

export default ({ activeType, onChange }: Props) => {
  return (
    <ProductSelectTemplate
      onChange={onChange}
      active={activeType}
      items={products.map((product, i) => ({ img: product[0].img, name: productTitles[i] }))}
    />
  );
};
