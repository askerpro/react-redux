import styled from 'styled-components';
import { Typography, Paper } from '@material-ui/core';
import { Container } from 'layout/section-content';
import Logo from 'layout/logo';

export const MainWrapper = styled.main``;

export const CustomContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 100px;
`;

export const VideoCover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #00000033;
`;

export const StyledLogo = styled(Logo)`
  height: 80px;
  width: auto;
`;

export const VideoBg = styled.video`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
`;

export const Title = styled(Typography)`` as typeof Typography;

export const Price = styled(Typography)`` as typeof Typography;

export const TitleWrapper = styled.div`
  text-shadow: 1px 1px 3px black, 0px 0px 3em black;
`;

export const ActionsWrapper = styled.div`
  margin-top: 40px;
`;

export default {};
