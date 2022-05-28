import { getPostReq } from '../core/API';
import { SIGN_IN_ENDPOINT, SIGN_UP_ENDPOINT } from '../core/API/constants/url';
import { SignInForm, SignUpForm } from '../core/interfaces/auth';

export const signUp = (signUpForm: SignUpForm) =>
  getPostReq<SignUpForm>(SIGN_UP_ENDPOINT, signUpForm);

export const signIn = (signInForm: SignInForm) =>
  getPostReq<SignInForm>(SIGN_IN_ENDPOINT, signInForm);
