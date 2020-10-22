import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { customRender } from '@smarthome/common/logic';
import Layout from './layout';

const SidebarLinks = [
  {
    text: 'Dashboard',
    icon: <div />,
    route: '/test',
  },
  {
    text: 'Algorithms',
    icon: <div />,
    route: '/test',
  },
  {
    text: 'Datasets',
    icon: <div />,
    route: '/test',
  },
  {
    text: 'User',
    icon: <div />,
    route: '/test',
  },
];

describe(' Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <Layout sidebarLinks={SidebarLinks} loading={false} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Router>
        <Layout sidebarLinks={SidebarLinks} loading={false} />
      </Router>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
