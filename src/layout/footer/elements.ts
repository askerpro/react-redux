import styled from 'styled-components';
import { Container } from 'layout/section-content';

export const Wrapper = styled.footer`
  background-color: #f2f2f2;
  ${({ theme }) => `${theme.breakpoints.up('lg')} {
    padding-left: 280px;
  }`}
  ${({ theme }) => `${theme.breakpoints.up('md')} {
    padding-right: 240px;
  }`}
`;
export const FooterContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 16px;
`;
export default {};
