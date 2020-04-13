import { Props as ResponsiveImageProps } from 'utils/responsive-image';

export interface Accessory {
  name: string;
  icon: ResponsiveImageProps;
  description: string;
}

export enum Accessories {
  SILL,
  SLOPE,
  TIDE,
  MOSQUITO_Net,
}

export const data: Accessory[] = [];

data[Accessories.SILL] = {
  name: 'Подоконник',
  description:
    'Внутренняя часть окна не может оставаться без специализированного обрамления – подоконника, который выполняет декорирующую (эстетическую) функцию температурно-компенсационного шва с крепежом и является в большинстве случаев надежной опорной площадкой для бытовой утвари и домашних цветов.',
  icon: require('./img/podokonnik.jpg'),
};

data[Accessories.SLOPE] = {
  name: 'Откос',
  description:
    'Откос - часть оконного проема, обрамляющая окно изнутри помещения. При демонтаже старых окон неминуемо снимается слой штукатурки, окружающий оконный проем, и лучший выход из ситуации – современные пластиковые откосы.',
  icon: require('./img/otkos.jpg'),
};

data[Accessories.TIDE] = {
  name: 'Отлив',
  description:
    'Отлив – элемент оконной конструкции, отвечающий за свободный отвод воды с внешней стороны окна. Благодаря отливам нижняя часть окна надежно защищена от влаги – на подоконнике и откосах не появятся загадочные темные пятна и лужицы.',
  icon: require('./img/otliv.jpg'),
};

data[Accessories.MOSQUITO_Net] = {
  name: 'Москитная сетка',
  description:
    'Москитная сетка - это наиболее оптимальный способ борьбы с вредными насекомыми. Помимо этого, летом она защищает окно от тополиного пуха, а осенью от листопада, позволяя держать окна полностью открытыми.',
  icon: require('./img/mosquite_net1.jpg'),
};

export default data;
