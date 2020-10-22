import React, { FC } from 'react';
import { RouteProps } from 'react-router-dom';
import { ConsumerRoutes } from '@smarthome/common/service';
import { useUser } from '@smarthome/consumer/feature/user/logic';
import { PrivateRoute as CommonPrivateRoute } from '@smarthome/common/ui';

const PrivateRoute: FC<RouteProps> = ({ children, ...props }) => {
  const { isLoggedIn } = useUser();

  return (
    <CommonPrivateRoute
      isUserLoggedIn={isLoggedIn}
      redirectPath={`/${ConsumerRoutes.SignIn}`}
      {...props}
    >
      {children}
    </CommonPrivateRoute>
  );
};

export default PrivateRoute;
