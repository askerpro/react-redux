import React from 'react';

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  images: Array<{
    height: number;
    width: number;
    path: string;
  }>;
  srcSet: string;
  src: string;
  placeholder: string;
  width: number;
  height: number;
  title: string;
  className?: string;
  innerRef?: React.Ref<HTMLImageElement>;
  noPlaceHolder?: boolean;
  lazy?: boolean;
}

class ResponsiveImage extends React.Component<Props> {
  render() {
    const {
      src,
      srcSet,
      className,
      title,
      placeholder,
      width,
      height,
      innerRef,
      noPlaceHolder,
      sizes,
      lazy = true,
    } = this.props;

    const processedSrc = src.replace(/(.jpg|.png)/gi, '.webp');
    const processedSrcSet = srcSet.replace(/(.jpg|.png)/gi, '.webp');
    const processedClassName = lazy ? `${className} lazyload ` : className;

    return (
      <img
        ref={innerRef}
        srcSet={lazy ? undefined : processedSrcSet}
        src={lazy ? undefined : processedSrc}
        data-src={lazy ? processedSrc : undefined}
        data-srcset={lazy ? processedSrcSet : undefined}
        data-sizes="auto"
        alt={title}
        width={width}
        height={height}
        className={processedClassName}
        style={
          !noPlaceHolder
            ? {
                backgroundImage: `url(${placeholder})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundPosition: '50%',
              }
            : undefined
        }
        sizes={sizes}
      />
    );
  }
}

export default React.forwardRef<HTMLImageElement, Props>((props, ref) => {
  return <ResponsiveImage {...props} innerRef={ref} />;
});
