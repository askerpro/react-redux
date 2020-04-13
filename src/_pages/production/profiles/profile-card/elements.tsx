import Animation from 'components/animation';
import styled from 'styled-components';

import {
  Card,
  CardMedia,
  IconButton,
  ExpansionPanelSummary,
  CardContent,
  ListItem,
} from '@material-ui/core';

export const CustomListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
` as typeof ListItem;

export const Wrapper = styled(Card)`
  position: relative;
  max-width: 330px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled(CardContent)`
  padding-top: 0;
`;

export const Media = styled(CardMedia)`
  padding-top: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const CardImageHelper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const Image = styled(Animation)`
  height: 100%;
  max-height: 350px;
  width: fit-content;
  margin: 0 auto;
`;

export const PanelHead = styled(ExpansionPanelSummary)`
  & .MuiExpansionPanelSummary-content {
    justify-content: space-between;
  }
`;

export const DialogCloseButton = styled(IconButton)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(1)}px;
  top: ${({ theme }) => theme.spacing(1)}px;
`;

export const Scheme = styled.img`
  margin: 0 auto;
  max-height: 300px;
  max-width: 100%;
  display: block;
`;

export const EquipmentImage = styled.img`
  max-height: 150px;
  max-width: 100%;
  display: block;
`;
