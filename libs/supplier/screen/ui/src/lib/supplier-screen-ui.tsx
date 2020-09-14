import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import {
  Layout,
  BrainIcon,
  PollIcon,
  UserIcon,
  SidebarLinkProps,
} from '@smarthome/common/ui';
import { SupplierRoutes } from '@smarthome/common/service';
import { User } from '@smarthome/supplier/feature/user/ui';
import {
  Algorithms,
  DetailedAlgorithm,
} from '@smarthome/supplier/feature/algorithms/ui';
import { Dashboard } from '@smarthome/supplier/feature/dashboard/ui';

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
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout sidebarLinks={SidebarLinks}>
          <Switch>
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
          </Switch>
        </Layout>
      </QueryParamProvider>
    </Router>
  );
};

export default SupplierScreenUi;
