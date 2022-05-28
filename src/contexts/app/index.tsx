import * as React from 'react';

import { SetStateFunctionType } from '../../core/types/hook';
import { User, initialUser } from '../../core/interfaces/user';
import useAuthHooks from './hooks/auth';
import useAppHooks from './hooks/app';
import CoreSnackbar from '../../core/components/Snackbar';
import {
  ISnackbarState,
  initialSnackbarState,
} from '../../core/interfaces/snackbar';

export interface IAppContext {
  user: User;
  isAuthenticated: boolean;
  snackbarState: ISnackbarState;
  setAuthentication: SetStateFunctionType;
  setSnackbarState: SetStateFunctionType;
}

export const AppContext = React.createContext<IAppContext>({
  user: initialUser,
  isAuthenticated: false,
  snackbarState: initialSnackbarState,
  setAuthentication: () => {},
  setSnackbarState: (_: ISnackbarState) => {},
});

export default function AppProvider({ children }: any) {
  const { isAuthenticated, setAuthentication } = useAuthHooks();
  const { snackbarState, setSnackbarState, closeSnackbar } = useAppHooks();

  return (
    <AppContext.Provider
      value={{
        user: initialUser,
        isAuthenticated,
        snackbarState,
        setAuthentication,
        setSnackbarState,
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
