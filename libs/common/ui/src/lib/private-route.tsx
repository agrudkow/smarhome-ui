import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  redirectPath: string;
  isUserLoggedIn: boolean;
}

/**
 * PrivateRoute component handles redirecting if user is not logged in.
 *
 * @param props PrivateRouteProps
 */
export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  redirectPath,
  isUserLoggedIn,
  ...routeProps
}) =>
  isUserLoggedIn ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to={redirectPath} />
  );
export default PrivateRoute;
