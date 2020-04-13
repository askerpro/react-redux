import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, CardActionArea, Divider, Button } from '@material-ui/core';
import Dialog from 'layout/ui/dialog';
import { Product } from 'data/products/interfaces';
import Param from './param';
import * as E from './elements';

interface State {
  isMoreOpen: boolean;
}

class ProductCard extends React.PureComponent<Product, State> {
  cardRef = React.createRef<HTMLDivElement>();

  constructor(props: Product) {
    super(props);
    this.state = {
      isMoreOpen: false,
    };
  }

  Dialog = () => {
    const { size, price, img, name = '', oldprice, equipment } = this.props;
    const { furniture, glass, handle, profile } = equipment;
    const { isMoreOpen } = this.state;
    return (
      <Dialog
        isOpen={isMoreOpen}
        title={`${name} ${size.width}x${size.height}mm`}
        onClose={() => {
          this.setState({
            isMoreOpen: false,
          });
        }}
        content={
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <E.Image {...img} title={name} />
              <Typography variant="body1" color="textSecondary" align="center">
                Размер:
                {`${size.width}x${size.height}mm`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Комплектация</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Param
                    label="Профильная система"
                    desc={profile.description}
                    icon={profile.icon}
                    title={profile.name}
                    divider
                  />
                </Grid>
                <Grid item xs={12}>
                  <Param
                    label="Фурнитура"
                    desc={furniture.description}
                    icon={furniture.icon}
                    title={furniture.name}
                    divider
                  />
                </Grid>
                <Grid item xs={12}>
                  <Param
                    label="Ручка"
                    desc={handle.description}
                    icon={handle.icon}
                    title={handle.name}
                    divider
                  />
                </Grid>
                <Grid item xs={12}>
                  <Param
                    label="Стеклопакет"
                    desc={glass.description}
                    icon={glass.icon}
                    title={glass.name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <E.OldPrice variant="body1" color="textSecondary">
                    {oldprice}
                  </E.OldPrice>
                  <Typography variant="h5" color="textPrimary">
                    {price}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>В стоимость включены: замер, доставка и установка</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
        footer={
          <Button variant="contained" size="small" color="secondary">
            Оформить заказ
          </Button>
        }
      />
    );
  };

  render() {
    const { size, price, img, oldprice } = this.props;
    return (
      <>
        {this.Dialog()}
        <CardActionArea
          onClick={() => {
            this.setState({
              isMoreOpen: true,
            });
          }}
        >
          <E.Card ref={this.cardRef}>
            <E.MyCardMedia>
              <E.Image {...img} title="Схематическое изображение продукта" noPlaceHolder />
            </E.MyCardMedia>
            <E.CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">
                    Размер:{' '}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                  >{`${size.width}x${size.height}mm`}</Typography>
                </Grid>
                <Grid item xs={12}>
                  {oldprice && (
                    <E.OldPrice variant="body2" color="textSecondary">
                      {oldprice}
                    </E.OldPrice>
                  )}
                  <Typography variant="h6" color="secondary">{`${price}*`}</Typography>
                </Grid>
              </Grid>
            </E.CardContent>
          </E.Card>
        </CardActionArea>
      </>
    );
  }
}

export default ProductCard;
