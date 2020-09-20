import React from 'react';
import { render } from '@testing-library/react';

import BaseGoogleLoginView from './base-google-login-view';

describe(' BaseGoogleLoginView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseGoogleLoginView />);
    expect(baseElement).toBeTruthy();
  });
});
