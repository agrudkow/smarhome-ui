import React, { FC } from 'react';
import BaseGoogleLoginView from './base-google-login-view';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

export interface SignInProps {
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
 * SignIn component displays extended BaseGoogleLoginView with preloaded navlinkText (`Create a new account`) and mainButtonText (`Sign in with Google`)
 *
 * @param props SignInProps
 */
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
