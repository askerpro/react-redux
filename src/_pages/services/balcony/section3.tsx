import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import img1 from './img/panoramic2.jpg';
import img2 from './img/panoramic.jpg';

const title = 'Панорамное остекление балкона';
const description =
  'Установите панорамные окна на балкон, чтобы подчеркнуть ночную красоту не беспокоясь о потере тепла, Окна Berta гарантируют максимальный уровень энергоэффективности. Если французские окна выходят на солнечную сторону, то световой поток легко регулировать при помощи специальных светоотражающих стеклопакетов, жалюзи и рулонных штор.';

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
