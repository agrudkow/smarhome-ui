import React from 'react';
import { render } from '@testing-library/react';

import ScreenState from './screen-state';

describe(' ScreenState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScreenState />);
    expect(baseElement).toBeTruthy();
  });
});
