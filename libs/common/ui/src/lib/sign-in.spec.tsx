import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { customRender } from '@smarthome/common/logic';
import SignIn from './sign-in';

describe(' SignIn', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <SignIn clientId="" navlinkRoute="" />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Router>
        <SignIn clientId="" navlinkRoute="" />
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
