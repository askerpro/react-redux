import React from 'react';
import { Drawer } from 'layout/drawer';
import Header from 'layout/header';
import Head from 'next/head';
import * as SE from 'layout/section-content';
import { CssBaseline, Button, Grid } from '@material-ui/core';
import ThemeProvider, { dark } from 'layout/theme';
import WindowsPromo from '_pages/production/windows/promo-card';
import DoorsPromo from '_pages/production/doors/promo-card';
import ServicesPromo from '_pages/services/promo-card';
import EquipmentsPromo from '_pages/production/equipments/promo-card';
import ProfilesPromo from '_pages/production/profiles/promo-card';
import ContactsPromo from '_pages/contacts/promo-card';
import AboutUsPromo from '_pages/company/promo-card';
import { Calc } from 'layout/icons';
import Footer from 'layout/footer';
import * as data from './data';
import * as E from './elements';
import LinkAdapter from 'utils/button-link';
import Preloader from 'layout/preloader';
import headerBgVideo from './media/intro.mp4';
import { useSelector, useDispatch } from 'react-redux';
import * as preloaderActions from 'layout/preloader/actions';
import { isPreloaderPlayed as isPreloaderPlayedSelector } from 'layout/preloader/selectors';

const promos = [
  WindowsPromo,
  DoorsPromo,
  ServicesPromo,
  EquipmentsPromo,
  ProfilesPromo,
  ContactsPromo,
  AboutUsPromo,
];

export default () => {
  const dispatch = useDispatch();
  const isPreloaderPlayed = useSelector(isPreloaderPlayedSelector);
  return (
    <>
      {!isPreloaderPlayed && (
        <Preloader
          onPlayed={() => {
            dispatch(preloaderActions.setPlayed());
          }}
        />
      )}
      <ThemeProvider>
        <Drawer swipeable />
        <Header swipableDrawer transparentBgOnTop />
        <Head>
          <title>{`${data.title} - Окна Берта`}</title>
          <meta name="description" content={data.description} />
        </Head>
        <E.MainWrapper>
          <ThemeProvider theme={dark}>
            <SE.Section noBorder>
              <E.VideoBg src={headerBgVideo} loop autoPlay muted />
              <E.VideoCover />
              <E.CustomContainer maxWidth="sm">
                <E.TitleWrapper>
                  <E.Title variant="h2" component="h1" color="textPrimary">
                    Заводские пластиковые окна от{' '}
                    <E.Price component="span" variant="h1" style={{ fontWeight: 500 }}>
                      2850р{' '}
                    </E.Price>
                    / м2
                  </E.Title>
                </E.TitleWrapper>
                <E.ActionsWrapper>
                  <Button
                    component={LinkAdapter}
                    size="large"
                    startIcon={<Calc />}
                    variant="contained"
                    color="secondary"
                    href="/calc"
                  >
                    Рассчитать стоимость вашего окна
                  </Button>
                </E.ActionsWrapper>
              </E.CustomContainer>
            </SE.Section>
          </ThemeProvider>
          <SE.Section>
            <SE.Container style={{ maxWidth: 'unset' }}>
              <Grid container spacing={3}>
                {promos.map((Promo, i) => (
                  <Grid item xs={12} xl={3} sm={6} md={6} lg={4} key={i}>
                    <Promo />
                  </Grid>
                ))}
              </Grid>
            </SE.Container>
          </SE.Section>
        </E.MainWrapper>
        <Footer noBreadCrumbs />
      </ThemeProvider>
    </>
  );
};
