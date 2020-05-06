import React from 'react';
import { Container, Header, Title, Body, SectionImage } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import img1 from './img/warm.jpg';
import img2 from './img/warm2.jpg';
import img3 from './img/warm3.jpg';
import img4 from './img/warm4.jpg';

const title = 'Теплое остекление балкона';
const description =
  'Установка пластиковых окон на лоджии, ее утепление и отделка — это возможность получить полноценную жилую комнату по цене балконного блока. Технология подразумевает установку ПВХ-профиля со стеклопакетами. Стоимость такого решения пропорциональна качеству. Даже зимой на уютном балконе вы сможете принимать гостей, отдыхать, играть с детьми, работать за компьютером или устраиваться поудобнее с книгой.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1, img2, img3, img4]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
      </Body>
    </Container>
  </NavSection>
);
