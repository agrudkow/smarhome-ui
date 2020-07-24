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
import { Routes } from '@smarthome/common/service';
import { Analytics } from './analytics';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />,
    route: Routes.Algorithms,
  },
  {
    text: 'Datasets',
    icon: <DataBaseIcon iconColor={''} />,
    route: Routes.Datasets,
  },
  {
    text: 'Analytics',
    icon: <PollIcon iconColor={''} />,
    route: Routes.Analytics,
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />,
    route: Routes.User,
  },
];

export const ScreenUi: React.FC = () => {
  return (
    <Router>
      <Layout sidebarLinks={SidebarLinks}>
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route path={`/${Routes.Algorithms}`} />
          <Route path={`/${Routes.Datasets}`} />
          <Route path={`/${Routes.Analytics}`} component={Analytics} exact />
          <Route path={`/${Routes.User}`} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default ScreenUi;
