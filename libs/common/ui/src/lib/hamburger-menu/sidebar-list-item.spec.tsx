import React from 'react';
import {
  BrowserRouter as Router,
  Router as RouterWithHistory,
} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SidebarListItem from './sidebar-list-item';
import { customRender } from '@smarthome/common/logic';

describe(' SidebarListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <SidebarListItem
          text=""
          showText={true}
          icon={<div />}
          linkRoute="/test"
        />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot when expanded', () => {
    const { baseElement } = customRender(
      <Router>
        <SidebarListItem
          text=""
          showText={true}
          icon={<div />}
          linkRoute="/test"
        />
      </Router>
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should not show text when "showTest" set to false', () => {
    const { getByTestId } = customRender(
      <Router>
        <SidebarListItem
          text=""
          showText={false}
          icon={<div />}
          linkRoute="/test"
        />
      </Router>
    );

    expect(getByTestId('text')).toHaveStyleRule('max-width', '0');
    expect(getByTestId('text')).toHaveStyleRule('opacity', '0');
    expect(getByTestId('text')).toHaveStyleRule('padding-left', '0');
  });

  it('should highlight button component when link route matches with history path', () => {
    const testPath = '/test-path';
    const history = createMemoryHistory();
    history.push(testPath);
    const { getByTestId } = customRender(
      <RouterWithHistory history={history}>
        <SidebarListItem
          text=""
          showText={false}
          icon={<div />}
          linkRoute={testPath}
        />
      </RouterWithHistory>
    );

    expect(getByTestId('styled-sidebar-list-item')).not.toHaveStyleRule(
      'background-color',
      'transparent'
    );
    expect(getByTestId('styled-sidebar-list-item')).not.toHaveStyleRule(
      'border-left',
      '2px solid transparent'
    );
  });
});
