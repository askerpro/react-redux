import Dialog from 'layout/ui/dialog';

import React from 'react';
import { Table, TableBody, TableCell, TableRow, Grid, Box } from '@material-ui/core';
import { GalleryItem } from 'data/gallery';
import * as E from './elements';

const ReviewCard: React.FC<GalleryItem> = ({ date, location, images, glass, lamination }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const Media = () => {
    return (
      <>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Дата:</TableCell>
              <TableCell align="right">{date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Город:</TableCell>
              <TableCell align="right">{location}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Стеклопакет:</TableCell>
              <TableCell align="right">{glass || 'Незаполнено'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ламинация:</TableCell>
              <TableCell align="right">{lamination || 'Незаполнено'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box mt="24px" />
        <Grid container spacing={2}>
          {images.map((image) => (
            <Grid item xs={12} key={image}>
              <E.CollectionImage className="lazyload" data-src={image} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        isOpen={isExpanded}
        fullHeight
        title={location}
        content={<Media />}
      />
      <E.CardActionArea onClick={handleOpen}>
        <E.Wrapper>
          <E.CardMedia>
            <E.CardMediaHelper>
              <E.CollectionImage className="lazyload" data-src={images[0]} />
            </E.CardMediaHelper>
          </E.CardMedia>
          {/* <CardContent>
            <Typography variant="body1" color="textPrimary">
              {location}, {date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary">Открыть</Button>
          </CardActions> */}
        </E.Wrapper>
      </E.CardActionArea>
    </>
  );
};

export default React.memo(ReviewCard);
