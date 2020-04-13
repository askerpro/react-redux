import React from 'react';
import { Office } from 'data/contacts';
import { Card, CardMedia, CardContent, CardActionArea, Link, Typography } from '@material-ui/core';

import MyDialog from 'layout/ui/dialog';

const component: React.FC<Office> = ({ address, city, phone }) => {
  const [isMapOpen, setMapOpen] = React.useState(false);

  const onMapClose = () => {
    setMapOpen(false);
  };

  const onMapOpen = () => {
    setMapOpen(true);
  };

  return (
    <Card>
      <MyDialog
        title={`${city}, ${address}`}
        isOpen={isMapOpen}
        onClose={onMapClose}
        fullHeight
        fullWidth
        content={
          <iframe
            title={`${city}, ${address}`}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A631ecfe248329f59e6a288ba6abb220d7069e96280f54eb1137e815ec2750ea8&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        }
      />
      <CardActionArea onClick={onMapOpen}>
        <CardMedia
          style={{ paddingTop: '62%', width: '100%' }}
          src="https://static-maps.yandex.ru/1.x/?l=map&lang=ru_RU&ll=39.72048523210816%2C43.5901912290728&origin=jsapi-constructor&pt=39.720466%2C43.590161%2Cpm2bll&size=500%2C400&z=19"
          image="https://static-maps.yandex.ru/1.x/?l=map&lang=ru_RU&ll=39.72048523210816%2C43.5901912290728&origin=jsapi-constructor&pt=39.720466%2C43.590161%2Cpm2bll&size=500%2C400&z=19"
        />
      </CardActionArea>
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
  );
};

export default component;
