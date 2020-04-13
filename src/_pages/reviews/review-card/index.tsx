import CardContent from '@material-ui/core/CardContent';
import Dialog from 'layout/ui/dialog';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import * as E from './elements';

interface Props {
  mediaSrc: string;
  date: string;
  location: string;
  region: string;
  preview: string;
}

const ReviewCard: React.FC<Props> = ({ date, location, mediaSrc, preview, region }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleClose = () => {
    setIsPlaying(false);
  };

  const handleOpen = () => {
    setIsPlaying(true);
  };

  const Media = () => {
    return (
      <E.Video
        autoPlay={isPlaying}
        poster={preview} // "/static/img/video/loading.gif"
        preload="none"
      >
        <source src={mediaSrc} />
        <track kind="captions" />
      </E.Video>
    );
  };

  return (
    <>
      <Dialog
        noPadding
        onClose={handleClose}
        isOpen={isPlaying}
        fullHeight
        title={region}
        content={<Media />}
        footer={
          <Typography variant="body1">
            {location},{date}
          </Typography>
        }
      />
      <E.CardActionArea onClick={handleOpen}>
        <E.Wrapper>
          <E.CardMedia>
            <E.CardMediaHelper>
              <E.PreviewImage data-src={preview} className="lazyload" />
              {preview ? (
                <E.PlayButton fontSize="small" />
              ) : (
                <CircularProgress style={{ position: 'absolute' }} color="secondary" />
              )}
            </E.CardMediaHelper>
          </E.CardMedia>
          <CardContent>
            <Typography variant="body2">
              {region}, {date}
            </Typography>
          </CardContent>
        </E.Wrapper>
      </E.CardActionArea>
    </>
  );
};

export default React.memo(ReviewCard);
