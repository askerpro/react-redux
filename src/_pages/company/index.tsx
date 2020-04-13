import React from 'react';
import Page from 'layout/page';
import { Section, Container, Title, Body, Header } from 'layout/section-content';
import { Typography, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Done } from '@material-ui/icons';

import headerBgMovie from '_pages/home/media/intro.mp4';
import * as E from './elements';
import productionSection from './production';
import PartnersSection from './partners';
import qualitySection from './quality';
import serviceSection from './service';
import finalSection from './final';
import testSection from './test';

const title = 'Кто мы такие «Окна Берта»?';
const description = 'Окна Берта предоставляет продукцию заводского качества по доступным ценам';

const advantages2 = [
  'внедрение инновационных ПВХ-систем и фурнитуры',
  'полный контроль оконных профилей, фурнитуры и всех комплектующих, а также готовых изделий техническими специалистами',
  'производство металлопластиковых окон на высококачественном немецком автоматизированном оборудовании на контролируемых партнёрских заводах',
  'полный комплекс услуг по доставке изделий в дома клиентов и их установке, отделке оконных проемов',
  'гарантийное и послегарантийное обслуживание',
];

const advantages = [
  'Более десяти лет на рынке',
  'Больше миллиона окон (под брендом Берта)',
  'Более 40 офисов продаж',
  'Работааем только с проверенными партнерами',
  'Гарантийное и послегарантийное обслуживание',
];

export default () => (
  <Page
    title={title}
    description={description}
    headerImg={
      <Section noBorder style={{ height: '350px' }}>
        <E.VideoBg src={headerBgMovie} loop autoPlay muted />
        <E.VideoCover />
      </Section>
    }
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Title component="h1">{title}</Title>
          </Header>
          <Body>
            <Typography>
              На сегодняшний день Окна БЕРТА самая динамично развивающаяся компания в оконной
              индустрии СКФО и ЮФО, которая располагает самой крупной сетью по реализации
              металлопластиковых и алюминиевых конструкций. Цель компании – доносить качественные и
              инновационные продукты до конечного потребителя с неизменно честным отношением к делу.
            </Typography>
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
    }
  >
    <PartnersSection />
    {productionSection}
    {qualitySection}
    {testSection}
    {serviceSection}
    {finalSection}
  </Page>
);
