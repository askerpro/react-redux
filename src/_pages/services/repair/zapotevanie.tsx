import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import img1 from './img/zapotevanie.jpg';

const title = 'Устранение запотевания';
const description =
  'Из-за неправильной установки нового окна, на стеклопакете может образовываться конденсат. В холодное время года на стеклопакете будет образовываться наледь. Со временем это приведет к появлению плесени на откосах и под подоконником.';
const description2 =
  'В таких случаях мастер проверят тягу вентиляционной шахты, измеряет ширину подоконника (не рекомендуется перекрывать подоконником батарею), проводит диагностику фурнитуры. Также проблему можно решить путём установки приточного клапана.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1]} />
        <Box mt="20px" />
        <Typography color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography color="textSecondary">{description2}</Typography>
      </Body>
    </Container>
  </NavSection>
);
