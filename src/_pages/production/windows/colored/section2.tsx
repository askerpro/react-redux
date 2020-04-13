import React from 'react';
import { Container, Header, Title, Body, Subtitle } from 'layout/section-content';
import SectionImage from 'layout/section-image';
import NavSection from 'layout/nav-section';
import { Typography, Box, Grid, Divider } from '@material-ui/core';
import in1 from './img/inside1.jpg';
import in2 from './img/inside2.jpg';
import in3 from './img/inside3.jpg';
import out1 from './img/outside1.jpg';
import out2 from './img/outside2.jpg';
import out3 from './img/outside3.jpg';

const title = 'Виды ламинации';
const subtitle = 'Ламинирование окон ПВХ  может производиться на двух сторонах оконного проема. ';

export default (
  <NavSection title={title} key={title} noBorder>
    <Container>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Body>
        <Box mt="20px" />
        <Grid container spacing={5}>
          <Grid item sm={6}>
            <SectionImage images={[in1, in2, in3]} />
            <Box mt="20px" />
            <Typography variant="h6">Внутренняя ламинация.</Typography>
            <Typography color="textSecondary">
              Внутренняя ламинация позволяет гармонично вписать окна в любой интерьер.
              Ламинированные окна гармонично сочетаются с мебелью, цветовой гаммой интерьера.
            </Typography>
            <Box mt="20px" />
            <Divider />
          </Grid>

          <Grid item sm={6}>
            <SectionImage images={[out1, out2, out3]} />
            <Box mt="20px" />
            <Typography variant="h6">Внешняя ламинация.</Typography>
            <Typography color="textSecondary">
              Плёнка продлевает срок эксплуатации изделия, выступает дополнительным покрытием,
              защищающим поверхность от выгорания на солнце и механических повреждений.
            </Typography>
            <Box mt="20px" />
            <Divider />
          </Grid>
        </Grid>
      </Body>
    </Container>
  </NavSection>
);
