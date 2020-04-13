import ExpansionPanelSummaryT from '@material-ui/core/ExpansionPanelSummary';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const ExpansionPanelSummary = styled(ExpansionPanelSummaryT)`
  justify-content: space-between;
`;

export const OfficeAddress = styled(Typography)`
  @media (min-width: 768px) {
    flex-basis: 50%;
    flex-shrink: 0;
  }
`;

export default {};
