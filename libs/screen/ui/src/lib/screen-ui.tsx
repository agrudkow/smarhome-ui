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
import {
  Routes,
  AlgorithmRoutes,
  DatasetRoutes,
} from '@smarthome/common/service';
import { Dashboard } from './dashboard';
import { Algorithms, DetailedAlgorithm, SelectDataset } from './algorithms';
import { Datasets, DetailedDataset } from './datasets';
import { QueryParamProvider } from 'use-query-params';
import SelectAlgorithm from './datasets/select-algorithm';
import { Execute } from './execute';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Dashboard',
    icon: <PollIcon iconColor={''} />,
    route: `/${Routes.Dashboard}`,
  },
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
            <Route path={`/${Routes.Dashboard}`} component={Dashboard} exact />
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
            <Route
              path={`/${Routes.Algorithms}/:algorithmId/${AlgorithmRoutes.Execute}/:datasetId`}
              component={Execute}
              exact
            />
            <Route path={`/${Routes.Datasets}`} component={Datasets} exact />
            <Route
              path={`/${Routes.Datasets}/:id`}
              component={DetailedDataset}
              exact
            />
            <Route
              path={`/${Routes.Datasets}/:id/${DatasetRoutes.SelectAlgorithm}`}
              component={SelectAlgorithm}
              exact
            />
            <Route
              path={`/${Routes.Datasets}/:datasetId/${DatasetRoutes.Execute}/:algorithmId`}
              component={Execute}
              exact
            />
            <Route path={`/${Routes.User}`} exact />
          </Switch>
        </Layout>
      </QueryParamProvider>
    </Router>
  );
};

export default ScreenUi;
