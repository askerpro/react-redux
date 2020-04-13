import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  onChange(isVisible: boolean): void;
}

const WithVisibilitySensor: React.FC<Props> = ({ children, onChange }) => {
  const [documentHeight, setDocumentHeight] = React.useState(0);

  React.useEffect(() => {
    setDocumentHeight(document.documentElement.clientHeight);
  }, []);

  return (
    <VisibilitySensor
      onChange={onChange}
      partialVisibility
      offset={{ top: documentHeight / 2 }}
      minTopValue={documentHeight / 2 + 50}
    >
      {children}
    </VisibilitySensor>
  );
};

export default WithVisibilitySensor;
