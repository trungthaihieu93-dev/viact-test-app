import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import MUIThemeProvider from './styles/theme';

import AppRoute from './routers';

import AppProvider from './contexts/app';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <MUIThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AppRoute />
        </AppProvider>
      </QueryClientProvider>
    </MUIThemeProvider>
  );
}
