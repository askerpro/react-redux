/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Hidden,
  Typography,
  useScrollTrigger,
  Slide,
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';
import * as SE from 'layout/section-content';
import * as E from './elements';
import * as actions from './actions';
import { getState } from './selectors';

interface Props {
  title: string;
  contentTitle?: string;
}

const PageNav: React.FC<Props> = ({ title, contentTitle }) => {
  const state = useSelector(getState);
  const navElements = state.sections;
  const activeElement = state.active;
  const dispatch = useDispatch();

  const isScrolledDown = useScrollTrigger({ threshold: 150 });
  const [isPanelOpened, setPanelOpened] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('scroll', () => {
      setPanelOpened(false);
    });
    return () => {
      document.removeEventListener('scroll', () => {
        setPanelOpened(false);
      });
    };
  }, []);

  const preparedElements = (
    <E.ItemsWrapper>
      <E.Label variant="subtitle1" gutterBottom>
        {contentTitle || 'Содержание'}
      </E.Label>
      <E.MyList disablePadding>
        {navElements.map((navElement) => (
          <E.NavItem
            component={Link}
            key={navElement.title}
            button
            selected={navElement.title === activeElement}
            color={navElement.title === activeElement ? 'primary' : 'textSecondary'}
            href={`#${navElement.title}`}
            underline="none"
          >
            {navElement.title}
          </E.NavItem>
        ))}
      </E.MyList>
    </E.ItemsWrapper>
  );
  useEffect(() => {
    return () => {
      dispatch(actions.clear());
    };
  }, []);
  return navElements.length ? (
    <>
      <SE.Section noBorder>
        <SE.Container style={{ paddingTop: 0 }}>{preparedElements}</SE.Container>
      </SE.Section>

      <Hidden smDown implementation="css">
        <E.SideWrapper>{preparedElements}</E.SideWrapper>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Slide appear={false} direction="down" in={isScrolledDown}>
          <E.TopWrapper>
            <ExpansionPanel expanded={isPanelOpened} square>
              <ExpansionPanelSummary
                onClick={() => {
                  setPanelOpened(!isPanelOpened);
                }}
                expandIcon={<ExpandMore />}
              >
                <Typography>{activeElement || title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>{preparedElements}</ExpansionPanelDetails>
            </ExpansionPanel>
          </E.TopWrapper>
        </Slide>
      </Hidden>
    </>
  ) : null;
};

export default PageNav;
