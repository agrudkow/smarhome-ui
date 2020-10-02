import React, { FC, useCallback } from 'react';
import { SignIn as GoogleSignIn } from '@smarthome/common/ui';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useLogin } from '@smarthome/consumer/feature/user/logic';
import { ConsumerRoutes } from '@smarthome/common/service';
import { isGoogleLoginResponseOffline } from '@smarthome/common/logic';

export const SignIn: FC = () => {
  const { handleLogin, handleLoginFailure } = useLogin();
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

  const handleSignIn = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if (isGoogleLoginResponseOffline(response)) {
        handleLoginFailure({
          message: 'Login error. Google login respone offline.',
        });
        return;
      }
      const {
        tokenId,
        tokenObj: { expires_at: expiresAt },
      } = response;
      handleLogin(tokenId, expiresAt);
    },
    [handleLogin, handleLoginFailure]
  );

  return (
    <GoogleSignIn
      clientId={GOOGLE_CLIENT_ID ?? ''}
      onSuccess={handleSignIn}
      onFailure={handleLoginFailure}
      navlinkRoute={ConsumerRoutes.SignUp}
    />
  );
};

export default SignIn;
