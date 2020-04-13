import React from 'react';
import { Props as ResponsiveImageProps } from 'utils/responsive-image';
import { Card, Typography, CardActionArea, CardActions, Button } from '@material-ui/core';
import LinkAdapter from 'utils/button-link';
import * as E from './elements';

interface Props {
  img: ResponsiveImageProps;
  title: string;
  subititle?: string;
  url: string;
  actionText?: string;
  fillMode?: 'contain' | 'cover';
}

const Component: React.FC<Props> = ({ img, title, subititle, url, actionText, fillMode }) => {
  return (
    <CardActionArea component={LinkAdapter} href={url} style={{ textTransform: 'none' }}>
      <Card>
        <E.MyCardMedia>
          <E.CardMediaHelper>
            <E.Image {...img} alt={title} fillMode={fillMode} />
          </E.CardMediaHelper>
        </E.MyCardMedia>
        <E.MyCardContent>
          <Typography variant="h6" style={{ fontWeight: 400 }} component="h2" color="textPrimary">
            {title}
          </Typography>
          <Typography color="textSecondary">{subititle}</Typography>
        </E.MyCardContent>
        <CardActions>
          <Button>{actionText || 'Подробнее'}</Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
};

export default Component;
