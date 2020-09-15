import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Layout,
  BrainIcon,
  DataBaseIcon,
  PollIcon,
  UserIcon,
  SidebarLinkProps,
} from '@smarthome/common/ui';
import {
  CustomerRoutes,
  CustomerAlgorithmRoutes,
  CustomerDatasetRoutes,
} from '@smarthome/common/service';
import { User, SignIn } from '@smarthome/consumer/feature/user/ui';
import {
  Algorithms,
  DetailedAlgorithm,
  SelectDataset,
} from '@smarthome/consumer/feature/algorithms/ui';
import { Dashboard } from '@smarthome/consumer/feature/dashboard/ui';
import {
  Datasets,
  DetailedDataset,
  SelectAlgorithm,
} from '@smarthome/consumer/feature/datasets/ui';
import {
  Execute,
  ExecutionDetails,
} from '@smarthome/consumer/feature/resultsets/ui';
import { history } from '@smarthome/common/state';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Dashboard',
    icon: <PollIcon iconColor={''} />,
    route: `/${CustomerRoutes.Dashboard}`,
  },
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />,
    route: `/${CustomerRoutes.Algorithms}`,
  },
  {
    text: 'Datasets',
    icon: <DataBaseIcon iconColor={''} />,
    route: `/${CustomerRoutes.Datasets}`,
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />,
    route: `/${CustomerRoutes.User}`,
  },
];

export const ScreenUi: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={`/${CustomerRoutes.SignIn}`} component={SignIn} exact />
        <Layout sidebarLinks={SidebarLinks} loading={false}>
          <Route
            path={`/${CustomerRoutes.Dashboard}`}
            component={Dashboard}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Algorithms}`}
            component={Algorithms}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Algorithms}/:id`}
            component={DetailedAlgorithm}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Algorithms}/:id/${CustomerAlgorithmRoutes.SelectDataset}`}
            component={SelectDataset}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Algorithms}/:algorithmId/${CustomerAlgorithmRoutes.Execute}/:datasetId`}
            component={Execute}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Datasets}`}
            component={Datasets}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Datasets}/:id`}
            component={DetailedDataset}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Datasets}/:id/${CustomerDatasetRoutes.SelectAlgorithm}`}
            component={SelectAlgorithm}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Datasets}/:datasetId/${CustomerDatasetRoutes.Execute}/:algorithmId`}
            component={Execute}
            exact
          />
          <Route
            path={`/${CustomerRoutes.Execution}/:resultsetId`}
            component={ExecutionDetails}
            exact
          />
          <Route path={`/${CustomerRoutes.User}`} component={User} exact />
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
};

export default ScreenUi;
