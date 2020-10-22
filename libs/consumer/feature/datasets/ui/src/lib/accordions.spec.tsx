import React from 'react';
import { render } from '@testing-library/react';

import Accordions from './accordions';

describe(' Accordions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordions />);
    expect(baseElement).toBeTruthy();
  });
});
