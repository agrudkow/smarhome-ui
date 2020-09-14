import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleSignIn } from '@smarthome/common/ui';
import { CustomerRoutes } from '@smarthome/common/service';

export const SignIn: FC = () => {
  const history = useHistory();
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

  const handleSignIn = useCallback(() => {
    history.push(CustomerRoutes.Dashboard);
  }, [history]);

  return (
    <GoogleSignIn clientId={GOOGLE_CLIENT_ID ?? ''} onSuccess={handleSignIn} />
  );
};

export default GoogleSignIn;
