import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import img1 from './img/mosquite_net1.jpg';
import img2 from './img/mosquite_net2.jpg';

const title = 'Москитные сетки.';
const description =
  'Москитная сетка — наиболее оптимальный способ борьбы с вредными насекомыми. Помимо этого, летом она защищает окно от тополиного пуха, а осенью от листопада, позволяя держать окна полностью открытыми.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1, img2]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
      </Body>
    </Container>
  </NavSection>
);
