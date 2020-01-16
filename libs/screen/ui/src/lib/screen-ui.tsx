import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Layout,
  BrainIcon,
  DataBaseIcon,
  PollIcon,
  UserIcon,
  SidebarLinkProps
} from '@smarthome/common/ui';
import { Routes } from '@smarthome/common/service';

const SidebarLinks: SidebarLinkProps[] = [
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />,
    route: Routes.Algorithms
  },
  {
    text: 'Datasets',
    icon: <DataBaseIcon iconColor={''} />,
    route: Routes.Datasets
  },
  {
    text: 'Analitics',
    icon: <PollIcon iconColor={''} />,
    route: Routes.Analitics
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />,
    route: Routes.User
  }
];

export const ScreenUi: React.FC = () => {
  return (
    <Router>
      <Layout sidebarLinks={SidebarLinks}>
        <Switch>
          <Route path="/" />
          <Route path={`/${Routes.Algorithms}`} />
          <Route path={`/${Routes.Datasets}`} />
          <Route path={`/${Routes.Analitics}`} />
          <Route path={`/${Routes.User}`} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default ScreenUi;
