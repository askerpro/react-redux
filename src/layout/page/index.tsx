import React from 'react';
import Head from 'next/head';
import ContentNav from 'layout/table-of-contents';
import { CssBaseline } from '@material-ui/core';
import { Drawer } from 'layout/drawer';
import Header from 'layout/header';
import Footer from 'layout/footer';
import ThemeProvider from 'layout/theme';
import BreadCrumbs from 'layout/breadcrumbs';
import { useDispatch } from 'react-redux';
import * as preloaderActions from 'layout/preloader/actions';

import * as E from './elements';

export interface Props {
  title: string;
  description: string;
  header?: JSX.Element;
  contentTitle?: string;
  headerImg?: JSX.Element;
}

const Page: React.FC<Props> = ({
  children,
  title,
  description,
  header,
  headerImg,
  contentTitle,
}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(preloaderActions.setPlayed());
  }, []);

  return (
    <ThemeProvider>
      <>
        <Drawer />

        <Header />
        <Head>
          <title>{`${title} - Окна Берта`}</title>
          <meta name="description" content={description} />
        </Head>

        <E.ContentWrapper>
          <E.Content>
            {headerImg && headerImg}

            <E.BreadCrumbsContainer>
              <BreadCrumbs />
            </E.BreadCrumbsContainer>

            {header}

            <ContentNav title={title} contentTitle={contentTitle} />

            {children}
          </E.Content>
        </E.ContentWrapper>

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Page;
