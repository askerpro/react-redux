import React from 'react';
import { Office } from 'data/contacts';
import { Card, CardMedia, CardContent, CardActionArea, Link, Typography } from '@material-ui/core';

import MyDialog from 'layout/ui/dialog';

const component: React.FC<Office> = ({ address, city, phone, src }) => {
  const [isMapOpen, setMapOpen] = React.useState(false);

  const onMapClose = () => {
    setMapOpen(false);
  };

  const onMapOpen = () => {
    setMapOpen(true);
  };

  return (
    <>
      <MyDialog
        title={`${city}, ${address}`}
        isOpen={isMapOpen}
        onClose={onMapClose}
        fullHeight
        fullWidth
        content={
          <iframe
            title={`${city}, ${address}`}
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
          />
        }
      />
      <CardActionArea onClick={onMapOpen}>
        <Card>
          <CardMedia
            style={{ paddingTop: '62%', width: '100%' }}
            src="https://static-maps.yandex.ru/1.x/?l=map&lang=ru_RU&ll=39.72048523210816%2C43.5901912290728&origin=jsapi-constructor&pt=39.720466%2C43.590161%2Cpm2bll&size=500%2C400&z=19"
            image="https://static-maps.yandex.ru/1.x/?l=map&lang=ru_RU&ll=39.72048523210816%2C43.5901912290728&origin=jsapi-constructor&pt=39.720466%2C43.590161%2Cpm2bll&size=500%2C400&z=19"
          />
          <CardContent>
            <Typography gutterBottom>{city}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {address}
            </Typography>
            <Link variant="body2" href={`tel://${phone}`}>
              {phone}
            </Link>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
};

export default component;
