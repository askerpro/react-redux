import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Section, SectionProps } from 'layout/section-content';
import { add, setActive } from 'layout/table-of-contents/actions';
import { getState } from 'layout/table-of-contents/selectors';
import { useDispatch, useSelector } from 'react-redux';

export interface Props extends SectionProps {
  title: string;
}

export interface State {
  documentHeight: number;
}

const component: React.FC<Props> = ({ children, title, ...other }) => {
  const [documentHeight, setDocumentHeight] = React.useState(0);
  const dispatch = useDispatch();
  const { sections } = useSelector(getState);
  React.useEffect(() => {
    setDocumentHeight(document.documentElement.clientHeight);
    dispatch(add(title));
  }, []);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && sections.length) {
          console.log('changed state ', title, isVisible);
          dispatch(setActive(title));
        }
      }}
      partialVisibility
      offset={{ top: documentHeight / 2 }}
      minTopValue={documentHeight / 2 + 100}
    >
      <Section id={title} {...other}>
        {children}
      </Section>
    </VisibilitySensor>
  );
};

export default component;
