import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { customRender } from '@smarthome/common/logic';
import SidebarList from './sidebar-list';

const itemsList = [
  { icon: <div />, route: '', text: '' },
  { icon: <div />, route: '', text: '' },
  { icon: <div />, route: '', text: '' },
];

describe(' SidebarList', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <SidebarList show={true} items={itemsList} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Router>
        <SidebarList show={true} items={itemsList} />
      </Router>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should create the same number of child nodes as the length of provided list in props', () => {
    const { baseElement } = customRender(
      <Router>
        <SidebarList show={true} items={itemsList} />
      </Router>
    );
    expect(baseElement.firstChild?.firstChild?.childNodes.length).toEqual(3);
  });
});
