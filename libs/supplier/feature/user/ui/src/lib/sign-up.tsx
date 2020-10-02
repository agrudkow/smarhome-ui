import React, { FC, useCallback } from 'react';
import { SignUp as GoogleSignUp } from '@smarthome/common/ui';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useSignUp } from '@smarthome/supplier/feature/user/logic';
import { SupplierRoutes } from '@smarthome/common/service';
import { isGoogleLoginResponseOffline } from '@smarthome/common/logic';

export const SignUp: FC = () => {
  const { handleSignUp: handleSignUpRedux, handleSignUpFailure } = useSignUp();
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

  const handleSignUp = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if (isGoogleLoginResponseOffline(response)) {
        handleSignUpFailure({
          message: 'Login error. Google login respone offline.',
        });
        return;
      }
      const {
        tokenId: idToken,
        profileObj: { email, givenName, familyName },
        tokenObj: { expires_at: expiresAt },
      } = response;
      handleSignUpRedux({
        idToken,
        expiresAt,
        email,
        firstName: givenName,
        lastName: familyName,
      });
    },
    [handleSignUpRedux, handleSignUpFailure]
  );
  return (
    <GoogleSignUp
      clientId={GOOGLE_CLIENT_ID ?? ''}
      onSuccess={handleSignUp}
      onFailure={handleSignUpFailure}
      navlinkRoute={SupplierRoutes.SignIn}
    />
  );
};

export default SignUp;
