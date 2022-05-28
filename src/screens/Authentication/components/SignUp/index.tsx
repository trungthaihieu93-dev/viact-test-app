import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import MUILink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { SIGN_IN_ROUTE_URL } from '../../../../routers/routes';
import { AppContext } from '../../../../contexts/app';
import { SignUpForm } from '../../../../core/interfaces/auth';
import { signUp } from '../../../../services/auth';

import './styles.css';

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

export default function SignUp(props: any) {
  const navigate = useNavigate();
  const { setSnackbarState } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);

      const signUpForm: SignUpForm = {
        email: formData.get('email'),
        password: formData.get('password'),
        username: formData.get('username'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
      };

      await signUp(signUpForm);

      setSnackbarState({
        isSnackbarShown: true,
        snackbarMessage: 'Registered successfully',
        snackbarSeverity: 'success',
      });

      navigate(SIGN_IN_ROUTE_URL);
    } catch (error) {
      setSnackbarState({
        isSnackbarShown: true,
        snackbarMessage: `${error}`,
        snackbarSeverity: 'error',
      });
    } finally {
      setLoading(false);
    }
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
            id="passwordConfirm"
            autoComplete="passwordConfirm"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
          />
          <Button
            type="submit"
            className="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? (
              <CircularProgress color="inherit" className="loading" />
            ) : (
              'Sign Up'
            )}
          </Button>
          <Grid container>
            <Grid item>
              {/* <MUILink href="sign-up" variant="body2">
                Don't have an account? Sign Up
              </MUILink> */}
              <Link to="/sign-in">Back to login</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
