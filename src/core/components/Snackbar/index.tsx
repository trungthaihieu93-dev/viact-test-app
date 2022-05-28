import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { AlertColor } from '@mui/material';

import { SNACKBAR_AUTOHIDE_TIME } from '../../config/snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface CoreSnackbarProps {
  isSnackbarShown: boolean;
  onClose: any;
  snackBarMessage: string;
  severity: AlertColor;
}

export default function CoreSnackbar(props: CoreSnackbarProps) {
  const { isSnackbarShown, snackBarMessage, severity, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isSnackbarShown}
      autoHideDuration={SNACKBAR_AUTOHIDE_TIME}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
}
