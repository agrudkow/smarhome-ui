import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { customRender } from '@smarthome/common/logic';
import BaseGoogleLoginView from './base-google-login-view';

describe(' BaseGoogleLoginView', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Router>
        <BaseGoogleLoginView
          clientId=""
          navlinkRoute=""
          navlinkText=""
          mainButtonText=""
        />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Router>
        <BaseGoogleLoginView
          clientId=""
          navlinkRoute=""
          navlinkText=""
          mainButtonText=""
        />
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should set main button text', () => {
    const buttonText = 'Test button text';
    const { getByText } = customRender(
      <Router>
        <BaseGoogleLoginView
          clientId=""
          navlinkRoute=""
          navlinkText=""
          mainButtonText={buttonText}
        />
      </Router>
    );
    expect(getByText(buttonText)).toBeTruthy();
  });

  it('should set navlink text', () => {
    const navlinkText = 'Test navlink text';
    const { getByText } = customRender(
      <Router>
        <BaseGoogleLoginView
          clientId=""
          navlinkRoute=""
          mainButtonText=""
          navlinkText={navlinkText}
        />
      </Router>
    );
    expect(getByText(navlinkText)).toBeTruthy();
  });
});
