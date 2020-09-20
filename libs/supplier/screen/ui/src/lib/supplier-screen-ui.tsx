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
} from '@smarthome/common/ui';
import { SupplierRoutes } from '@smarthome/common/service';
import { User, SignIn } from '@smarthome/supplier/feature/user/ui';
import {
  Algorithms,
  DetailedAlgorithm,
} from '@smarthome/supplier/feature/algorithms/ui';
import { Dashboard } from '@smarthome/supplier/feature/dashboard/ui';
import { history } from '@smarthome/common/state';
import { useLoading } from '@smarthome/common/logic';
import { RootState } from '@smarthome/supplier/store';
import { SnackbarProvider } from 'notistack';

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
        <Layout sidebarLinks={SidebarLinks} loading={loading}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <SnackbarSubscriber>
              <Route
                path={`/${SupplierRoutes.Dashboard}`}
                exact
                component={Dashboard}
              />
              <Route
                path={`/${SupplierRoutes.Algorithms}`}
                exact
                component={Algorithms}
              />
              <Route
                path={`/${SupplierRoutes.Algorithms}/:id`}
                exact
                component={DetailedAlgorithm}
              />
              <Route path={`/${SupplierRoutes.User}`} exact component={User} />
            </SnackbarSubscriber>
          </SnackbarProvider>
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
};

export default SupplierScreenUi;
