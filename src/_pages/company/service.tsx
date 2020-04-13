import React from 'react';
import { Section, Container, Title, Body, Header, Image, Video } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import Carousel from 'layout/ui/carousel';
import { Done } from '@material-ui/icons';
import img1 from './img/service1.jpg';

const title = 'Профессиональный сервис.';
const description =
  'Мы ценим наших клиентов и очень внимательно относимся к качеству оказываемых услуг:';

const advantages = [
  'Собственный учебный центр позволяет держать квалификацию нашего персонала на высоком уровне, благодаря чему мы можем решать самые сложные задачи.',
  'Оптимальное местоположение завода позволяет снизить издержки и сроки доставки продукции до клиента',
  'Оказываем полный комплекс услуг по доставке изделий в дома клиентов и их установке, отделке оконных проемов',
  'Все монтажные работы производится в строгом соответствии с техническими требованиями.',
  'Сервисное обслуживание включает в себя как гарантийное так и пост гарантийное обслуживание',
];

export default (
  <Section>
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Carousel>
          <Image {...img1} />
        </Carousel>
        <Typography>{description}</Typography>
        <List disablePadding>
          {advantages.map((advantage) => (
            <ListItem key={advantage} disableGutters>
              <ListItemIcon style={{ minWidth: '36px' }}>
                <Done color="secondary" />
              </ListItemIcon>
              <Typography>{advantage}</Typography>
            </ListItem>
          ))}
        </List>
      </Body>
    </Container>
  </Section>
);
