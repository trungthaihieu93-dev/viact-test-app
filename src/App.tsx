import * as React from 'react';

import MUIThemeProvider from './styles/theme';

import AppRoute from './routers';

import AppProvider from './contexts/app';

export default function App() {
  return (
    <MUIThemeProvider>
      <AppProvider>
        <AppRoute />
      </AppProvider>
    </MUIThemeProvider>
  );
}
