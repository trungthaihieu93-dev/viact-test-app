
import { AlertColor } from '@mui/material';

export const initialSnackbarState: ISnackbarState = {
  isSnackbarShown: false,
  snackbarMessage: '',
  snackbarSeverity: 'info',
};

export interface ISnackbarState {
  isSnackbarShown: boolean;
  snackbarMessage: string;
  snackbarSeverity: AlertColor;
}
