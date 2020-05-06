import React from 'react';
import { Container, Header, Title, Body, SectionImage } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box, List, ListItemIcon, ListItem } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import img1 from './img/glasses.jpg';

const title = 'Стеклопакеты';
const description =
  'Для теплого климата, комнат, ориентированных на юг, и кухонь, где температура почти всегда выше, чем в других местах, подойдут стандартные двухкамерные стеклопакеты.';

export default (
  <NavSection title={title} key={title}>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <SectionImage images={[img1]} />
        <Box mt="20px" />
        <Typography color="textSecondary">{description}</Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Стандартный стеклопакет</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>{`Стеклопакет "Термос+"`}</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Энергосберегающий стеклопакет</Typography>
          </ListItem>
        </List>
      </Body>
    </Container>
  </NavSection>
);
