import React from 'react';
import { Container, Header, Title, Body, Subtitle } from 'layout/section-content';

import NavSection from 'layout/nav-section';
import { Box } from '@material-ui/core';
import ColorPicker from './color-picker';

const title = 'Доступные цвета';
const subtitle =
  'Чтобы облагородить окно, заказчики часто выбирают варианты с имитацией древесных текстур. Такой подход будет выигрышно смотреться в помещении, где в интерьере использовано много дерева. Да и в целом профиль под древесину хорошо вписывается в любую комнату.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Body>
        <Box mt="20px" />
        <ColorPicker />
      </Body>
    </Container>
  </NavSection>
);
