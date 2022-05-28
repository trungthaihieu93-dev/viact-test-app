import { FormDataFieldType } from '../types/form';

export interface SignUpForm {
  email: FormDataFieldType;
  password: FormDataFieldType;
  username: FormDataFieldType;
  firstName: FormDataFieldType;
  lastName: FormDataFieldType;
}

export interface SignInForm {
  email: FormDataFieldType;
  password: FormDataFieldType;
}
