import React from 'react';
import { render } from '@testing-library/react';

import Execute from './execute';

describe(' Execute', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Execute />);
    expect(baseElement).toBeTruthy();
  });
});
