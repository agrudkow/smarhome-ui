import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Layout,
  BrainIcon,
  PollIcon,
  UserIcon,
  SidebarLinkProps,
  SnackbarSubscriber,
  NotFoundPage,
} from '@smarthome/common/ui';
import { SupplierRoutes } from '@smarthome/common/service';
import { User, SignIn, SignUp } from '@smarthome/supplier/feature/user/ui';
import {
  Algorithms,
  DetailedAlgorithm,
} from '@smarthome/supplier/feature/algorithms/ui';
import { Dashboard } from '@smarthome/supplier/feature/dashboard/ui';
import { history } from '@smarthome/common/state';
import { useLoading } from '@smarthome/common/logic';
import { RootState } from '@smarthome/supplier/store';
import { SnackbarProvider } from 'notistack';
import PrivateRoute from './private-route';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Dashboard',
    icon: <PollIcon iconColor={''} />,
    route: `/${SupplierRoutes.Dashboard}`,
  },
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />,
    route: `/${SupplierRoutes.Algorithms}`,
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />,
    route: `/${SupplierRoutes.User}`,
  },
];

export const SupplierScreenUi: FC = () => {
  const { loading } = useLoading<RootState>();

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={`/${SupplierRoutes.SignIn}`} exact component={SignIn} />
        <Route path={`/${SupplierRoutes.SignUp}`} exact component={SignUp} />
        <Layout sidebarLinks={SidebarLinks} loading={loading}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <SnackbarSubscriber>
              <Switch>
                <PrivateRoute
                  path={`/${SupplierRoutes.Dashboard}`}
                  exact
                  component={Dashboard}
                />
                <PrivateRoute
                  path={`/${SupplierRoutes.Algorithms}`}
                  exact
                  component={Algorithms}
                />
                <PrivateRoute
                  path={`/${SupplierRoutes.Algorithms}/:id`}
                  exact
                  component={DetailedAlgorithm}
                />
                <PrivateRoute
                  path={`/${SupplierRoutes.User}`}
                  exact
                  component={User}
                />
                <PrivateRoute path="*" component={NotFoundPage} />
              </Switch>
            </SnackbarSubscriber>
          </SnackbarProvider>
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
};

export default SupplierScreenUi;
