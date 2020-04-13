import React from 'react';

import products from 'data/products';
import ProductSelectTemplate from '../product-select-template';
export interface Props {
  activeType: number;
  activeVariant: number;
  onChange(activeVariant: number): void;
}

export default ({ activeType, activeVariant, onChange }: Props) => {
  return (
    <ProductSelectTemplate
      onChange={onChange}
      active={activeVariant}
      items={products[activeType]}
    />
  );
};
