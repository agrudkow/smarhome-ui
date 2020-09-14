import React from 'react';
import { render } from '@testing-library/react';

import GoogleSignIn from './sign-in';

describe(' SignIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleSignIn />);
    expect(baseElement).toBeTruthy();
  });
});
