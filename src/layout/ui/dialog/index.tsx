import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Close as CloseIcon } from '@material-ui/icons';
import { Slide, useMediaQuery } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { DefaultTheme } from 'styled-components';
import * as E from './elements';

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  isOpen: boolean;
  onClose(): void;
  title: string;
  content: JSX.Element;
  footer?: JSX.Element;
  fullHeight?: boolean;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const Dialog: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  content,
  footer,
  fullHeight,
  fullWidth,
  noPadding,
}) => {
  const isMobile = useMediaQuery<DefaultTheme>((theme) => theme.breakpoints.down('sm'));

  return (
    <E.Wrapper
      maxWidth="sm"
      fullScreen={isMobile}
      TransitionComponent={Transition}
      onClose={onClose}
      open={isOpen}
      fullHeight={fullHeight}
      fullWidth={fullWidth}
    >
      <E.Title disableTypography>
        <Typography>{title}</Typography>
        <E.CloseButton onClick={onClose}>
          <CloseIcon />
        </E.CloseButton>
      </E.Title>
      <E.CustomDialogContent noPadding={noPadding} dividers>
        {content}
      </E.CustomDialogContent>
      {footer && <E.Footer>{footer}</E.Footer>}
    </E.Wrapper>
  );
};

export default Dialog;
