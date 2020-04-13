import React from 'react';
import { ProductType } from 'data/products/interfaces';

import Windows from './windows';
import Doors from './doors';
import Balconies from './balconies';

interface Props {
  type: number;
  variant: number;
}

const products: React.FC[][] = [];
products[ProductType.WINDOW] = Windows;
products[ProductType.DOOR] = Doors;
products[ProductType.DOOR_WINDOW] = Balconies;

export default ({ type, variant }: Props) => {
  const R = products[type][variant];
  return (
    <>
      <R />
    </>
  );
};
