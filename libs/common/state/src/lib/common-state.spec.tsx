import React from 'react';
import { render } from '@testing-library/react';

import CommonState from './common-state';

describe(' CommonState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonState />);
    expect(baseElement).toBeTruthy();
  });
});
