import Dialog from 'layout/ui/dialog';

import React from 'react';
import { Props as ResponsiveImageProps } from 'utils/responsive-image';
import * as E from './elements';

const ReviewCard: React.FC<{ imgData: ResponsiveImageProps }> = ({ imgData }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const Media = () => {
    return <E.CollectionImage {...imgData} />;
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        fullWidth
        isOpen={isExpanded}
        fullHeight
        title="Галерея работ"
        content={<Media />}
      />
      <E.CardActionArea onClick={handleOpen}>
        <E.Wrapper>
          <E.CardMedia>
            <E.CardMediaHelper>
              <E.CollectionImage {...imgData} />
            </E.CardMediaHelper>
          </E.CardMedia>
        </E.Wrapper>
      </E.CardActionArea>
    </>
  );
};

export default React.memo(ReviewCard);
