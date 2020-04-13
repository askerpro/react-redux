import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Header, Title, Body } from 'layout/section-content';

import MyThemeProvider, { silverEcoLight } from 'layout/theme';
import * as E from './elements';
import PrivolnovImg from './img/privolnov.png';
import WindowImg from './img/window_20009.png';

import windowAfter from './img/after2.jpg';
import windowBefore from './img/before3.jpg';

const Promo = () => {
  return (
    <MyThemeProvider theme={silverEcoLight}>
      <E.StyledNavSection title={`Пластиковые окна "Berta Silver Eco"`} noPadding noBorder>
        <E.CustomContainer>
          <Header style={{ zIndex: 1, position: 'relative' }}>
            <Typography variant="h6" color="textSecondary">
              Антон Привольнов рекомендует пластиковые окна
            </Typography>
            <Title variant="h2" color="textPrimary" gutterBottom={false}>
              Berta Silver
              <Typography variant="inherit" color="secondary">
                {` `}Eco
              </Typography>
            </Title>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              от 2540р/м2
            </Typography>
            <Button variant="contained" color="secondary" size="small">
              Подробнее
            </Button>
          </Header>
          <Body>
            <E.ImageContainer>
              <E.Privolnov {...PrivolnovImg} noPlaceHolder />
              <E.WindowContainer>
                <E.abstractLineLeft {...windowBefore} noPlaceHolder />
                <E.Window {...WindowImg} noPlaceHolder />
                <E.abstractLineRight {...windowAfter} noPlaceHolder />
              </E.WindowContainer>
            </E.ImageContainer>
          </Body>
        </E.CustomContainer>
      </E.StyledNavSection>
    </MyThemeProvider>
  );
};

export default Promo;
