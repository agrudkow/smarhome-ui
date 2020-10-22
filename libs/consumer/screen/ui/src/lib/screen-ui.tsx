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
  NotFoundPage,
} from '@smarthome/common/ui';
import {
  ConsumerRoutes,
  ConsumerAlgorithmRoutes,
  ConsumerDatasetRoutes,
} from '@smarthome/common/service';
import { User, SignIn, SignUp } from '@smarthome/consumer/feature/user/ui';
import {
  Algorithms,
  DetailedAlgorithm,
  SelectAlgorithm,
} from '@smarthome/consumer/feature/algorithms/ui';
import { Dashboard } from '@smarthome/consumer/feature/dashboard/ui';
import {
  Datasets,
  DetailedDataset,
  SelectDataset,
} from '@smarthome/consumer/feature/datasets/ui';
import {
  Execute,
  ExecutionDetails,
} from '@smarthome/consumer/feature/resultsets/ui';
import { history } from '@smarthome/common/state';
import { SnackbarProvider } from 'notistack';
import { useLoading } from '@smarthome/common/logic';
import { RootState } from '@smarthome/consumer/store';
import PrivateRoute from './private-route';

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
        <Route exact path={`/${ConsumerRoutes.SignIn}`} component={SignIn} />
        <Route exact path={`/${ConsumerRoutes.SignUp}`} component={SignUp} />
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
                  exact
                  path={`/${ConsumerRoutes.Dashboard}`}
                  component={Dashboard}
                />
                <Route
                  exact
                  path={`/${ConsumerRoutes.Algorithms}`}
                  component={Algorithms}
                />
                <Route
                  exact
                  path={`/${ConsumerRoutes.Algorithms}/:id`}
                  component={DetailedAlgorithm}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Algorithms}/:id/${ConsumerAlgorithmRoutes.SelectDataset}`}
                  component={SelectDataset}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Algorithms}/:algorithmId/${ConsumerAlgorithmRoutes.Execute}/:datasetId`}
                  component={Execute}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Datasets}`}
                  component={Datasets}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Datasets}/:id`}
                  component={DetailedDataset}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Datasets}/:id/${ConsumerDatasetRoutes.SelectAlgorithm}`}
                  component={SelectAlgorithm}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Datasets}/:datasetId/${ConsumerDatasetRoutes.Execute}/:algorithmId`}
                  component={Execute}
                />
                <PrivateRoute
                  exact
                  path={`/${ConsumerRoutes.Execution}/:resultsetId`}
                  component={ExecutionDetails}
                />
                <Route
                  exact
                  path={`/${ConsumerRoutes.User}`}
                  component={User}
                />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </SnackbarSubscriber>
          </SnackbarProvider>
        </Layout>
      </Switch>
    </ConnectedRouter>
  );
};

export default ScreenUi;
