import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MUILink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import { SignInForm } from '../../../../core/interfaces/auth';
import { signIn } from '../../../../services/auth';
import { PROFILE_QUERY } from '../../../../core/API/constants/query';
import storage from '../../../../utils/storage';
import { AppContext } from '../../../../contexts/app';

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

export default function SignIn(props: any) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setSnackbarState } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);

      const signInForm: SignInForm = {
        email: formData.get('email'),
        password: formData.get('password'),
      };

      const res = await signIn(signInForm);

      storage.set('jwt', res.data.access_token);

      queryClient.invalidateQueries(PROFILE_QUERY);

      setSnackbarState({
        isSnackbarShown: true,
        snackbarMessage: 'Signed in successfully!',
        snackbarSeverity: 'success',
      });

      navigate('/');
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
          Sign in
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className="button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? (
              <CircularProgress color="inherit" className="loading" />
            ) : (
              'Sign In'
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <MUILink href="#" variant="body2">
                Forgot password?
              </MUILink>
            </Grid>
            <Grid item>
              {/* <MUILink href="sign-up" variant="body2">
                Don't have an account? Sign Up
              </MUILink> */}
              <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
