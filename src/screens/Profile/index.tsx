import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MUILink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { AppContext } from '../../contexts/app';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <MUILink color="inherit" href="https://mui.com/">
        Your Website
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Profile() {
  const { user, setSnackbarState, logout } = useContext(AppContext);

  const handleLogout = () => {
    setSnackbarState({
      isSnackbarShown: true,
      snackbarMessage: 'Logged out!',
      snackbarSeverity: 'warning',
    });
    logout();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            value={user?.email}
            disabled
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            value={user?.username}
            disabled
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          />
          <TextField
            margin="normal"
            value={user?.firstName}
            disabled
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
          />
          <TextField
            margin="normal"
            value={user?.lastName}
            disabled
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
          />
          <Grid container>
            <Grid item xs>
              <MUILink href="#" variant="body2">
                Change password
              </MUILink>
            </Grid>
            <Grid item>
              <MUILink onClick={handleLogout} href="#" variant="body2">
                Log out
              </MUILink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
