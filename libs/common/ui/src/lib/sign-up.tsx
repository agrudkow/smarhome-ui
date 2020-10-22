import React from 'react';
import BaseGoogleLoginView from './base-google-login-view';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export interface SignUpProps {
  clientId: string;
  onSuccess?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFailure?: (error: unknown) => void;
  navlinkRoute: string;
}

export const SignUp = (props: SignUpProps) => {
  return (
    <BaseGoogleLoginView
      navlinkText={'Already have an account?'}
      mainButtonText={'Sign up with Google'}
      {...props}
    />
  );
};

export default SignUp;
