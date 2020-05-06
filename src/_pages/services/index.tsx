import React from 'react';
import Page from 'layout/page';
import { Section, Container, Title, Subtitle, Header } from 'layout/section-content';

import MontagePromo from './montage/promo-section';
import RepairPromo from './repair/promo-section';
import BalconiesPromo from './balcony/promo-section';
import MeasurePromo from './measure/promo-section';

import { title, description } from './data';

const promos = [RepairPromo, MeasurePromo, MontagePromo, BalconiesPromo];

export default () => (
  <Page
    title={title}
    description={description}
    header={
      <Section>
        <Container>
          <Header>
            <Title component="h1">{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Header>
        </Container>
      </Section>
    }
  >
    {promos.map((PromoSection, i) => (
      <PromoSection key={i} />
    ))}
  </Page>
);
