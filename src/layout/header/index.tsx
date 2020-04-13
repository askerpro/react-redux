import React from 'react';
import {
  Divider,
  Hidden,
  Button,
  Link,
  useScrollTrigger,
  Slide,
  IconButton,
} from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import ThemeProvider, { dark } from 'layout/theme';
import LinkAdapter from 'utils/link';
import ButtonLinkAdapter from 'utils/button-link';
import { Controller as DrawerController } from 'layout/drawer';
import { Theme } from 'layout/logo';
import { Calc } from 'layout/icons';
import * as E from './elements';

interface Props {
  border?: 'wrapper' | 'content';
  swipableDrawer?: boolean;
  transparentBgOnTop?: boolean;
}

const Header: React.FC<Props> = ({ border, swipableDrawer, transparentBgOnTop }) => {
  const scrolled = useScrollTrigger({ threshold: 0 });
  const [isOnTop, setIsOnTop] = React.useState(true);
  const handleScroll = () => {
    if (window.scrollY > 59) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  };

  React.useEffect(() => {
    handleScroll();
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const header = (
    <E.Header visible={transparentBgOnTop ? !isOnTop : true}>
      <E.NavWrapper>
        <E.NavContainer>
          <E.Left>
            <Hidden lgUp={!swipableDrawer} implementation="css">
              <DrawerController />
            </Hidden>
            <E.LogoWrapper>
              <Link href="/" component={LinkAdapter}>
                <E.Logo theme={Theme.DARK} />
              </Link>
            </E.LogoWrapper>
          </E.Left>

          <E.Right>
            <E.Action>
              <Hidden smDown implementation="css">
                <Button
                  href="/calc"
                  component={ButtonLinkAdapter}
                  variant="text"
                  startIcon={<Calc style={{ fontSize: 24 }} />}
                >
                  Рассчет стоимости
                </Button>
              </Hidden>
              <Hidden mdUp implementation="css">
                <IconButton href="/calc" component={ButtonLinkAdapter} variant="text">
                  <Calc style={{ fontSize: 24 }} />
                </IconButton>
              </Hidden>
            </E.Action>
            <E.Action>
              <Hidden smDown implementation="css">
                <Button
                  size="large"
                  href={`tel://${process.env.PHONE}`}
                  variant="text"
                  startIcon={<Phone />}
                >
                  {process.env.PHONE}
                </Button>
              </Hidden>
              <Hidden mdUp implementation="css">
                <IconButton href={`tel://${process.env.PHONE}`} edge="end">
                  <Phone />
                </IconButton>
              </Hidden>
            </E.Action>
          </E.Right>
        </E.NavContainer>
        {border === 'content' && <Divider />}
      </E.NavWrapper>
      {border === 'wrapper' && <Divider />}
    </E.Header>
  );
  return (
    <ThemeProvider theme={dark}>
      <Hidden mdUp>
        <Slide appear={false} direction="down" in={!scrolled}>
          {header}
        </Slide>
      </Hidden>
      <Hidden smDown>{header}</Hidden>
    </ThemeProvider>
  );
};

export default Header;
