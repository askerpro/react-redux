import styled from 'styled-components';
import { Container } from 'layout/section-content';

export const BreadCrumbsContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ContentWrapper = styled.main`
  width: 100%;
  margin-top: 59px;
  ${({ theme }) => `${theme.breakpoints.up('lg')} {
    padding-left: 280px;
  }`}
  ${({ theme }) => `${theme.breakpoints.up('md')} {
    padding-right: 240px;
  }`}
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`;
