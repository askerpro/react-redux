import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import SectionImage from 'layout/section-image';
import img1 from './img/podokonnik1.jpg';
import img2 from './img/podokonnik.jpg';
import img3 from './img/otkos.jpg';
import img4 from './img/otliv.jpg';

const title = 'Подоконники, отливы, откосы';
const description =
  'За пластиковыми подоконниками просто ухаживать, они не требуют покраски, полировки, не воспламеняются и не поддерживают горение. Пластиковые подоконники не выцветают, не желтеют, и в течение многих лет эксплуатации сохраняют свой первоначальный цвет.';

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
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Придает эстетичный и законченный вид</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Отлив защищает окно от влаги снаружи</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Подоконник изолирует от холодного воздуха зимой</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Противодействует возникновения конденсата</Typography>
          </ListItem>
        </List>
      </Body>
    </Container>
  </NavSection>
);
