import * as React from 'react';

import { SetStateFunctionType } from '../../core/types/hook';
import { User } from '../../core/interfaces/user';
import useAuthHooks from './hooks/auth';
import useAppHooks from './hooks/app';
import CoreSnackbar from '../../core/components/Snackbar';
import {
  ISnackbarState,
  initialSnackbarState,
} from '../../core/interfaces/snackbar';

export interface IAppContext {
  user: User | undefined;
  isAuthenticated: boolean;
  snackbarState: ISnackbarState;
  setSnackbarState: SetStateFunctionType;
  logout: Function;
}

export const AppContext = React.createContext<IAppContext>({
  user: undefined,
  isAuthenticated: false,
  snackbarState: initialSnackbarState,
  setSnackbarState: (_: ISnackbarState) => {},
  logout: () => {},
});

export default function AppProvider({ children }: any) {
  const { user, isAuthenticated, logout } = useAuthHooks();
  const { snackbarState, setSnackbarState, closeSnackbar } = useAppHooks();

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated,
        snackbarState,
        setSnackbarState,
        logout,
      }}
    >
      {children}
      <CoreSnackbar
        isSnackbarShown={snackbarState.isSnackbarShown}
        onClose={closeSnackbar}
        severity={snackbarState.snackbarSeverity}
        snackBarMessage={snackbarState.snackbarMessage}
      />
    </AppContext.Provider>
  );
}
