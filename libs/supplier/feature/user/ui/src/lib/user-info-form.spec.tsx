import React from 'react';
import { render } from '@testing-library/react';

import UserInfoForm from './user-info-form';

describe(' UserInfoForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserInfoForm />);
    expect(baseElement).toBeTruthy();
  });
});
