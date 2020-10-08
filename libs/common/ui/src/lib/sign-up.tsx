import React from 'react';
import BaseGoogleLoginView from './base-google-login-view';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export interface SignUpProps {
  /**Google project client id.*/
  clientId: string;
  /**Callback funcion called on success of login request.*/
  onSuccess?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  /**Callback funcion called on failure of login request.*/
  onFailure?: (error: unknown) => void;
  /**Navlink route.*/
  navlinkRoute: string;
}

/**
 * SignUp component displays extended BaseGoogleLoginView with preloaded navlinkText (`Already have an account?`) and mainButtonText (`Sign up with Google`)
 *
 * @param props SignUpProps
 */
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
