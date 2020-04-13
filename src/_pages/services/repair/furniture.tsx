import React from 'react';
import { Container, Header, Title, Body } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import { Typography, Box, List, ListItemIcon, ListItem } from '@material-ui/core';
import SectionImage from 'layout/section-image';
import { Done } from '@material-ui/icons';
import img1 from './img/furniture.jpg';

const title = 'Регулировка или замена фурнитуры.';
const description =
  'Из-за несвоевременной чистки, смазки или регулировки оконных механизмов, фурнитура начинает заклинивать. Дальнейшая эксплуатация может привести к поломке некоторых элементов. Настройку или замену фурнитуры следует выполнять если:';

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
            <Typography>Окно продувает, в ощущается сквозняк</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Нижняя или средняя часть створки провисает и задевает раму</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Проблемы с фурнитурой? Болтается ручка?</Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Done color="primary" />
            </ListItemIcon>
            <Typography>Ручка не поворачивается или поворачивается с трудом</Typography>
          </ListItem>
        </List>
      </Body>
    </Container>
  </NavSection>
);
