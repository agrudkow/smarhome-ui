import React, { FC } from 'react';
import BaseGoogleLoginView from './base-google-login-view';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export interface SignInProps {
  clientId: string;
  onSuccess?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFailure?: (error: unknown) => void;
  navlinkRoute: string;
}

export const SignIn: FC<SignInProps> = (props) => {
  return (
    <BaseGoogleLoginView
      navlinkText={'Create a new account'}
      mainButtonText={'Sign in with Google'}
      {...props}
    />
  );
};

export default SignIn;
