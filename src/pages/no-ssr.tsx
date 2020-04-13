import React from 'react';
import ClientOnly from 'utils/client-only';
import WindowsPage from '_pages/production/windows';

export default () => (
  <ClientOnly>
    <WindowsPage />
  </ClientOnly>
);
