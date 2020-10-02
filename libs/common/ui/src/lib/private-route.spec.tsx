import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PrivateRoute from './private-route';
import { customRender } from '@smarthome/common/logic';

describe(' PrivateRoute', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <BrowserRouter>
        <PrivateRoute isUserLoggedIn={true} redirectPath="" />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <BrowserRouter>
        <PrivateRoute isUserLoggedIn={true} redirectPath="" />
      </BrowserRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should route to requested when user is logged in', () => {
    const testPath = '/test-path';
    const redirectPath = '/redirect-path';
    const history = createMemoryHistory();
    history.push(testPath);
    customRender(
      <Router history={history}>
        <PrivateRoute
          isUserLoggedIn={true}
          redirectPath={redirectPath}
          path={testPath}
        />
      </Router>
    );
    expect(history.location.pathname).toEqual(testPath);
  });

  it('should redirect when user is not logged in', () => {
    const testPath = '/test-path';
    const redirectPath = '/redirect-path';
    const history = createMemoryHistory();
    history.push(testPath);
    customRender(
      <Router history={history}>
        <PrivateRoute
          isUserLoggedIn={false}
          redirectPath={redirectPath}
          path={testPath}
        />
      </Router>
    );
    expect(history.location.pathname).toEqual(redirectPath);
  });
});
