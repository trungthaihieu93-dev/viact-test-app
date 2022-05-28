import { useState } from 'react';

import {
  initialSnackbarState,
  ISnackbarState,
} from '../../../core/interfaces/snackbar';

const useAppHooks = () => {
  const [snackbarState, setSnackbarState] =
    useState<ISnackbarState>(initialSnackbarState);

  const closeSnackbar = () => {
    setSnackbarState((prevState) => ({ ...prevState, isSnackbarShown: false }));
  };

  return { snackbarState, setSnackbarState, closeSnackbar };
};

export default useAppHooks;
