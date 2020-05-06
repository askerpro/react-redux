import React from 'react';
import { Container, Header, Title, Body, SectionImage } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import img1 from './img/outside2.jpg';
import img2 from './img/outside.jpg';

const title = 'Входные пластиковые двери';
const description =
  'Двери – лицо дома. Мы готовы сделать их особенными, удобными, функциональными, цветными, распашными, сложной конструкции и геометрии, безопасными от взлома. Входные группы обладают высоким уровнем противовзломности. Абсолютно герметичны, прекрасно сохраняют тепло и спасают от сквозняков. Дополнительные уплотнители позволят Вам наслаждаться тишиной в доме. Можно комплектовать различными опциями: доводчики, раскладка всех видов, ламинация поверхностей под любой цвет и фактуру.';

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
