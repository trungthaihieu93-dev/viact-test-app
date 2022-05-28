import * as React from 'react';

import MUIThemeProvider from './styles/theme';

import AppRoute from './routers';

export default function App() {
  return (
    <MUIThemeProvider>
      <AppRoute />
    </MUIThemeProvider>
  );
}
