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
            <Route path={`/${SupplierRoutes.Dashboard}`} exact />
            <Route path={`/${SupplierRoutes.Algorithms}`} exact />
            <Route path={`/${SupplierRoutes.Algorithms}/:id`} exact />
            <Route path={`/${SupplierRoutes.User}`} exact />
          </Switch>
        </Layout>
      </QueryParamProvider>
    </Router>
  );
};

export default SupplierScreenUi;
