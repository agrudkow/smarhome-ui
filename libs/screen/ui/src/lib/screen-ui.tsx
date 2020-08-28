import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Layout,
  BrainIcon,
  DataBaseIcon,
  PollIcon,
  UserIcon,
  SidebarLinkProps,
} from '@smarthome/common/ui';
import { Routes, AlgorithmRoutes } from '@smarthome/common/service';
import { Analytics } from './analytics';
import { Algorithms, DetailedAlgorithm, SelectDataset } from './algorithms';
import { Datasets } from './datasets';
import { QueryParamProvider } from 'use-query-params';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />,
    route: `/${Routes.Algorithms}`,
  },
  {
    text: 'Datasets',
    icon: <DataBaseIcon iconColor={''} />,
    route: `/${Routes.Datasets}`,
  },
  {
    text: 'Analytics',
    icon: <PollIcon iconColor={''} />,
    route: `/${Routes.Analytics}`,
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />,
    route: `/${Routes.User}`,
  },
];

export const ScreenUi: React.FC = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout sidebarLinks={SidebarLinks}>
          <Switch>
            <Route
              path={`/${Routes.Algorithms}`}
              component={Algorithms}
              exact
            />
            <Route
              path={`/${Routes.Algorithms}/:id`}
              component={DetailedAlgorithm}
              exact
            />
            <Route
              path={`/${Routes.Algorithms}/:id/${AlgorithmRoutes.SelectDataset}`}
              component={SelectDataset}
              exact
            />
            <Route path={`/${Routes.Datasets}`} component={Datasets} exact />
            <Route path={`/${Routes.Datasets}/:id`} exact />
            <Route path={`/${Routes.Analytics}`} component={Analytics} exact />
            <Route path={`/${Routes.User}`} exact />
          </Switch>
        </Layout>
      </QueryParamProvider>
    </Router>
  );
};

export default ScreenUi;
