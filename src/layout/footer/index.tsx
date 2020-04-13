import React from 'react';
import BreadCrumbs from 'layout/breadcrumbs';
import { Typography, Divider, Box, Button } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import { Instagram } from 'layout/icons';

import * as E from './elements';

import FooterMenu from './menu';

const date = new Date();

interface Props {
  noBreadCrumbs?: boolean;
}

const Footer: React.FC<Props> = ({ noBreadCrumbs }) => {
  return (
    <E.Wrapper>
      <E.FooterContainer>
        {!noBreadCrumbs && (
          <>
            <BreadCrumbs />
          </>
        )}

        <Box mt="40px" />
        <FooterMenu />
        <Box mt="40px" />
        <Typography variant="body2" color="textSecondary">
          <Button
            startIcon={<Phone />}
            href={`tel://${process.env.PHONE}`}
            color="primary"
            size="large"
          >
            {process.env.PHONE}
          </Button>
          Звонок по России бесплатный
        </Typography>
        <Box mt="16px">
          <Button
            startIcon={<Instagram />}
            href="https://www.instagram.com/oknaberta_official/?hl=ru"
          >
            oknaberta_official
          </Button>{' '}
          <Typography variant="body2" color="textSecondary" component="span">
            Больше фотографий и отзывовов на нашем инстаграм канале
          </Typography>
        </Box>

        <Box mt="16px" />
        <Divider />
        <Box mt="16px" />
        <Typography variant="body2" color="textSecondary">
          © {`${date.getFullYear()}г.`} | Okna Berta - Все права защищены
        </Typography>
      </E.FooterContainer>
    </E.Wrapper>
  );
};

export default Footer;
