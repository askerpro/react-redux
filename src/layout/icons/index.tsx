import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';
import ThermometerSvg from './resources/thermometer.svg';
import DiamondSvg from './resources/diamond.svg';
import CalcSvg from './resources/calc.svg';
import InstagramSvg from './resources/instagram.svg';

export const Thermometer: React.FC<SvgIconProps> = (props) => (
  <SvgIcon component={ThermometerSvg} viewBox="0 0 48 48" {...props} />
);
export const Diamond: React.FC<SvgIconProps> = (props) => (
  <SvgIcon component={DiamondSvg} viewBox="0 0 48 48" {...props} />
);
export const Calc: React.FC<SvgIconProps> = (props) => (
  <SvgIcon component={CalcSvg} viewBox="0 0 48 48" {...props} />
);
export const Instagram: React.FC<SvgIconProps> = (props) => (
  <SvgIcon component={InstagramSvg} viewBox="0 0 48 48" {...props} />
);
