import React from 'react';
import { Container, Header, Title, Body, Section, HeaderImage } from 'layout/section-content';
import Page from 'layout/page';
import { Typography, Grid, Divider } from '@material-ui/core';
import UserInputForm from 'components/user-input-form';
import SendMail from 'utils/send-mail';

import img1 from './img/promo2.jpg';

export const title = 'Бесплатный замер и консультация специалиста';
export const description =
  'Важно! Чтобы пластиковое окно прослужило вам долгие годы необходимо снять точные размеры.';
export const description2 =
  'Если у вас есть опыт и профессиональный инструмент, например, лазерная рулетка – вы можете сделать это самостоятельно.  Но лучше не рискуйте и вызовите профессионального замерщика.  Есть разница в замере оконных проемов с/без внешней четверти (выступающего во внутреннюю часть оконного проема ряда кирпичей с внешней стороны стены), а ценой ошибки может стать стоимость окна.';
export const description3 =
  'Мастер профессионально замерит точные размеры окна, после чего вы сможете приобрести у нас окно именно по вашему размеру.';

const pageContent = () => (
  <Page
    title={title}
    description={description}
    headerImg={<HeaderImage {...img1} />}
    header={
      <Section noBorder>
        <Container>
          <Header>
            <Title component="h1">{title}</Title>
          </Header>
          <Body>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography gutterBottom>{description}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>{description2}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>{description3}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <UserInputForm
                  submitText="Вызввать мастера бесплатно"
                  onSubmit={(userInfo) => {
                    const msg = `
                      <p> Имя: <strong>${userInfo.userName}</strong></p>\r\n
                      <p> Телефон: <strong>${userInfo.userPhone}</strong></p>\r\n
                      <p> Населенный пункт: <strong>${userInfo.location}</strong></p>\r\n
                      `;
                    SendMail('Запрос на вызов замерщика', msg);
                  }}
                />
              </Grid>
            </Grid>
          </Body>
        </Container>
      </Section>
    }
  />
);

export default pageContent;
