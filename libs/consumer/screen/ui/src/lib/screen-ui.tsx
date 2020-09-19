import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Layout,
  BrainIcon,
  DataBaseIcon,
  PollIcon,
  UserIcon,
  SidebarLinkProps,
  SnackbarSubscriber,
} from '@smarthome/common/ui';
import {
  ConsumerRoutes,
  ConsumerAlgorithmRoutes,
  ConsumerDatasetRoutes,
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
import { SnackbarProvider } from 'notistack';
import { useLoading } from '@smarthome/common/logic';
import { RootState } from '@smarthome/consumer/store';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Dashboard',
    icon: <PollIcon iconColor={''} />,
    route: `/${ConsumerRoutes.Dashboard}`,
  },
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />,
    route: `/${ConsumerRoutes.Algorithms}`,
  },
  {
    text: 'Datasets',
    icon: <DataBaseIcon iconColor={''} />,
    route: `/${ConsumerRoutes.Datasets}`,
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />,
    route: `/${ConsumerRoutes.User}`,
  },
];

export const ScreenUi: FC = () => {
  const { loading } = useLoading<RootState>();

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={`/${ConsumerRoutes.SignIn}`} component={SignIn} exact />
        <Layout sidebarLinks={SidebarLinks} loading={loading}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <SnackbarSubscriber>
              <Route
                path={`/${ConsumerRoutes.Dashboard}`}
                component={Dashboard}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Algorithms}`}
                component={Algorithms}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Algorithms}/:id`}
                component={DetailedAlgorithm}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Algorithms}/:id/${ConsumerAlgorithmRoutes.SelectDataset}`}
                component={SelectDataset}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Algorithms}/:algorithmId/${ConsumerAlgorithmRoutes.Execute}/:datasetId`}
                component={Execute}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Datasets}`}
                component={Datasets}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Datasets}/:id`}
                component={DetailedDataset}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Datasets}/:id/${ConsumerDatasetRoutes.SelectAlgorithm}`}
                component={SelectAlgorithm}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Datasets}/:datasetId/${ConsumerDatasetRoutes.Execute}/:algorithmId`}
                component={Execute}
                exact
              />
              <Route
                path={`/${ConsumerRoutes.Execution}/:resultsetId`}
                component={ExecutionDetails}
                exact
              />
              <Route path={`/${ConsumerRoutes.User}`} component={User} exact />
            </SnackbarSubscriber>
          </SnackbarProvider>
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
};

export default ScreenUi;
