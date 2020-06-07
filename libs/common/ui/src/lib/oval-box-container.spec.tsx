import React from 'react';
import { render } from '@testing-library/react';

import OvalBoxContainer from './oval-box-container';

describe(' OvalBoxContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OvalBoxContainer />);
    expect(baseElement).toBeTruthy();
  });
});
