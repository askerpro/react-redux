/* eslint-disable global-require */
import { Props as ResponsiveImageProps } from 'utils/responsive-image';

interface ColorPickerElement {
  name: string;
  alias: string;
  img: ResponsiveImageProps;
  icon: ResponsiveImageProps;
}
export default [
  {
    name: 'Agate Grey',
    alias: 'Агатовый серый',
    img: require('./img/AgateGrey.jpg'),
    icon: require('./img/icons/AgateGrey.jpg'),
  },
  {
    name: 'Anthracite Grey 167',
    alias: 'Антрацитово-серый',
    img: require('./img/AnthraciteGrey167.jpg'),
    icon: require('./img/icons/AnthraciteGrey167.jpg'),
  },
  {
    name: 'Dark Oak FL-F1',
    alias: 'Темный дуб',
    img: require('./img/DarkOakFL-F1.jpg'),
    icon: require('./img/icons/DarkOakFL-F1.jpg'),
  },
  {
    name: 'Golden Oak',
    alias: 'Золотой дуб',
    img: require('./img/GoldenOak.jpg'),
    icon: require('./img/icons/GoldenOak.jpg'),
  },
  {
    name: 'Light Oak',
    alias: 'Светлый дуб',
    img: require('./img/LightOak.jpg'),
    icon: require('./img/icons/LightOak.jpg'),
  },
  {
    name: 'Mahogany',
    alias: 'Махагон',
    img: require('./img/Mahogany.jpg'),
    icon: require('./img/icons/Mahogany.jpg'),
  },
  {
    name: 'Rustic Oak 1',
    alias: 'Рустикальный дуб',
    img: require('./img/RusticOak1.jpg'),
    icon: require('./img/icons/RusticOak1.jpg'),
  },
] as ColorPickerElement[];
