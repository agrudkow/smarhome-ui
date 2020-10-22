import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { customRender } from '@smarthome/common/logic';
import SignUp from './sign-up';

describe(' SignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <SignUp clientId="" navlinkRoute="" />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Router>
        <SignUp clientId="" navlinkRoute="" />
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
