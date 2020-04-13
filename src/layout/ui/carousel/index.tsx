import React from 'react';
import Carousel, { CarouselProps } from 'nuka-carousel';
import { Button } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import styled from 'styled-components';

const MyCarousel: React.FC<CarouselProps> = ({ className, children, ...other }) => {
  return (
    <Carousel
      heightMode="current"
      className={className}
      {...other}
      renderCenterRightControls={null}
      renderBottomRightControls={({ nextSlide, currentSlide, slideCount }) => (
        <Button
          onClick={nextSlide}
          size="small"
          style={{ minWidth: 'unset', opacity: 0.5 }}
          disabled={currentSlide === slideCount - 1}
          endIcon={<ArrowForwardIos />}
        >
          Далее
        </Button>
      )}
      renderBottomLeftControls={({ previousSlide, currentSlide }) => (
        <Button
          onClick={previousSlide}
          size="small"
          style={{ minWidth: 'unset', opacity: 0.5 }}
          disabled={currentSlide === 0}
          startIcon={<ArrowBackIos />}
        >
          Назад
        </Button>
      )}
      renderCenterLeftControls={null}
    >
      {React.Children.toArray(children).map((child) => (
        <div style={{ padding: '2px' }} key={child.toString()}>
          {child}
        </div>
      ))}
    </Carousel>
  );
};

const MyStyledCarousel = styled(MyCarousel)`
  .slider-control-bottomcenter {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
    width: fit-content;
    left: unset !important;
    position: relative !important;
    transform: unset !important;
  }

  .slider-list {
    transition: height 0.3s;
    cursor: unset !important;
  }
  .slider-control-bottomcenter .paging-item svg {
    transform: scale(1.5);
  }
  .slider-control-bottomcenter .paging-item.active svg {
    transform: scale(2);
  }
`;
export default React.memo<typeof MyCarousel>(MyStyledCarousel);
