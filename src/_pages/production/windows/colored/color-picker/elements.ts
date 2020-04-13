import styled from 'styled-components';
import colorPickerBg from './img/seasons.jpg';

export const ColorPicker = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface ColorPickerImageProps {
  active: boolean;
}

export const ColorPickerImage = styled.img<ColorPickerImageProps>`
  height: 100%;
  width: 100%;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;
export const ColorPickerImageWrapper = styled.div`
  :after {
    background-image: url(${colorPickerBg.src});
    content: '';
    position: absolute;
    height: 62.1%;
    width: 63.2%;
    z-index: 1;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  position: relative;
`;

export const Picker = styled.div`
  display: block;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

interface PickerItemProps {
  active: boolean;
}
export const PickerItem = styled.img<PickerItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cacaca;
  position: relative;
  cursor: pointer;
  :after {
    display: ${({ active }) => (active ? 'block' : 'none')};
    content: '';
    position: absolute;
    width: calc(100% + 16px);
    height: calc(100% + 12px);
    left: -8px;
    top: -6px;
    border: 1px solid #cacaca;
  }
`;
