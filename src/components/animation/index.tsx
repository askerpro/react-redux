import React from 'react';
import { Texture } from 'data/profiles/interfaces';
import path from 'path';
import * as E from './elements';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  textures: Texture[];
  framesPath: string;
  state: number;
  onReady?(): void;
  onAnimationPlayedStart?(): void;
  onAnimationPlayedEnd?(): void;
}

const Animation: React.FC<Props> = ({
  framesPath,
  children,
  textures,
  state,
  className,
  onReady,
  onAnimationPlayedEnd,
  onAnimationPlayedStart,
}) => {
  const requestRef = React.useRef<number>();

  const previousTimeRef = React.useRef<number>();

  const prepearedTexturesRef = React.useRef<typeof textures>();

  let loadedFramesCount = 0;

  const fps = 24;

  const frameInterval = 1000 / fps;

  const [currentFrame, setCurrentFrame] = React.useState(0);

  const [isReady, setReady] = React.useState(false);

  const onFrameLoad = () => {
    loadedFramesCount += 1;
    if (loadedFramesCount === textures.length) {
      setReady(true);
    }
  };

  React.useEffect(() => {
    if (onReady) {
      onReady();
    }
  }, [isReady]);

  React.useEffect(() => {
    prepearedTexturesRef.current = textures.map((textureData) => {
      const frame = { ...{}, ...textureData };
      const src = path.join(framesPath, textureData.image);
      fetch(src)
        .then((response) => response.blob())
        .then((buffer) => {
          frame.image = URL.createObjectURL(buffer);
          onFrameLoad();
        });
      return frame;
    });
  }, []);

  const targetFrameIndex = () => {
    return Math.round(state * (textures.length - 1));
  };

  const getPosition = () => {
    return (100 * currentFrame) / textures.length;
  };

  const updatePosition = (timeStamp: number) => {
    if (previousTimeRef.current !== undefined) {
      const delta = timeStamp - previousTimeRef.current;
      if (delta >= frameInterval) {
        setCurrentFrame((prevFrame) => {
          previousTimeRef.current = timeStamp;
          const direction = targetFrameIndex() > prevFrame ? 1 : -1;
          const targetFrame = prevFrame + direction;
          if (targetFrame === targetFrameIndex()) {
            cancelAnimationFrame(requestRef.current as number);
            requestRef.current = 0;

            if (state === 0 && onAnimationPlayedStart) {
              onAnimationPlayedStart();
            }
            if (state === 1 && onAnimationPlayedEnd) {
              onAnimationPlayedEnd();
            }
          } else {
            requestAnimationFrame(updatePosition);
          }
          return targetFrame;
        });
      } else {
        requestAnimationFrame(updatePosition);
      }
    } else {
      previousTimeRef.current = timeStamp;
      requestAnimationFrame(updatePosition);
    }
  };

  if (!requestRef.current && isReady && currentFrame !== targetFrameIndex()) {
    requestRef.current = window.requestAnimationFrame(updatePosition);
  }

  return (
    <E.Wrapper className={className}>
      {children}
      <E.SizeHelper
        dataLoaded={loadedFramesCount === textures.length}
        src={`${framesPath}${textures[0].image}`}
        width={`${textures[0].size.w}px`}
        height={`${textures[0].size.h}px`}
      />
      {isReady && (
        <E.FramesWrapper>
          <E.Frames
            style={{
              transform: `translateY(-${getPosition()}%)`,
            }}
          >
            {prepearedTexturesRef.current &&
              prepearedTexturesRef.current.map((texture) => {
                return <E.Frame src={texture.image} key={texture.image} />;
              })}
          </E.Frames>
        </E.FramesWrapper>
      )}
    </E.Wrapper>
  );
};

export default Animation;
