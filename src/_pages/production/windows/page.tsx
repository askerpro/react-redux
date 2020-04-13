import React from 'react';
import {
  Container,
  Header,
  Title,
  Body,
  Section,
  Subtitle,
  HeaderImage,
} from 'layout/section-content';
import ProductCard from 'components/product-card';
import productsWindow from 'data/products/windows';
import NavSection from 'layout/nav-section';
import Page from 'layout/page';
import { Typography, Grid } from '@material-ui/core';

import BalconyPromo from '_pages/services/balcony/windowsPromoSection';
import ReviewsSection from '_pages/reviews/reviews-section';

import ProfilesSection from '_pages/production/profiles/profiles-section';
import SilverEcoPromo from '_pages/production/profiles/silver-eco/promos/promo1';
import CalcSection from '_pages/calc/section';

import EquipmentsPromo from '_pages/production/equipments/promo-section';
import GallerySection from '_pages/production/gallery/section';

import ColoredPromo from './colored/promo-section';
import PanoramicPromo from './panoramic/promo-section';
import CustomDesignPromo from './custom-design/promo-section';
import HeaderImg from './img/promo.jpg';
import { title, description } from './data';

const promoSections = [
  CustomDesignPromo,
  PanoramicPromo,
  ColoredPromo,
  BalconyPromo,
  EquipmentsPromo,
];

const pageContent = () => (
  <Page
    title={title}
    description={description}
    headerImg={<HeaderImage {...HeaderImg} />}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Title>{title}</Title>
          </Header>
          <Body>
            <Typography color="textSecondary">{description}</Typography>
          </Body>
        </Container>
      </Section>
    }
  >
    <NavSection title="Цены на пластиковые окна">
      <Container>
        <Header>
          <Title>Цены на пластиковые окна</Title>
          <Subtitle>Нажмите на окно, чтобы узнать подробности</Subtitle>
        </Header>
        <Body>
          <Grid container spacing={1}>
            {productsWindow.map((productData) => {
              return (
                <Grid item xs={6} sm={4} key={productData.name}>
                  <ProductCard {...productData} />
                </Grid>
              );
            })}
          </Grid>
        </Body>
      </Container>
    </NavSection>
    <ProfilesSection />
    <SilverEcoPromo />
    <CalcSection subtitle="Выберите окно для рассчета" initialProductType={0} />
    <ReviewsSection />
    <GallerySection />
    {promoSections.map((PromoSection, i) => (
      <PromoSection key={i} />
    ))}
  </Page>
);

export default pageContent;
