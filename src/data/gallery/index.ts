import images from './img/images.json';
import { Props as ResponsiveImageProps } from 'utils/responsive-image';

export default images.map((image) => require(`./img/${image}`)) as ResponsiveImageProps[];
