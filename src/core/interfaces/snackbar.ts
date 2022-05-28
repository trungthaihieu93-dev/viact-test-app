import { AlertColor } from '@mui/material';

export const initialSnackbarState: ISnackbarState = {
  isSnackbarShown: false,
  snackbarMessage: '',
  snackbarSeverity: 'success',
};

export interface ISnackbarState {
  isSnackbarShown: boolean;
  snackbarMessage: string;
  snackbarSeverity: AlertColor;
}
