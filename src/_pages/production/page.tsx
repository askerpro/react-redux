import React from 'react';
import Page from 'layout/page';
import { Section, Container, Title, Subtitle, Header } from 'layout/section-content';

import { Grid } from '@material-ui/core';
import WindowsPromo from './windows/promo-section';
import DoorsPromo from './doors/promo-section';
import EquipmentsPromo from './equipments/promo-section';
import ProfilesPromo from './profiles/promo-section';
import { title, description } from './data';

const promoSections = [WindowsPromo, DoorsPromo, EquipmentsPromo, ProfilesPromo];

export default () => (
  <Page
    title={title}
    description={description}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Title component="h1">{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Header>
        </Container>
      </Section>
    }
  >
    {promoSections.map((PromoSection, i) => (
      <PromoSection key={i} />
    ))}
  </Page>
);
