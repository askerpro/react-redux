import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';

const title = 'Что такое ламинирование';
const description =
  'Ламинация окон  представляет собой процедуру нанесения специальной пленки на ПВХ-профиль. Для этого сначала на поверхности распределяют разогретый клей, уже затем в ход идет многослойная, но тонкая акриловая пленка, которая прижимается к профилю. Когда клей остынет, она станет его неотъемлемой частью, которая будет предавать эстетичный вид на протяжении пятнадцати — двадцати лет.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
      </Body>
    </Container>
  </NavSection>
);
