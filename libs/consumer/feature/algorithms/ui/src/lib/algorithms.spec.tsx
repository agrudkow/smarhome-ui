import React from 'react';
import { render } from '@testing-library/react';

import Algorithms from './algorithms';

describe(' Algorithms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Algorithms />);
    expect(baseElement).toBeTruthy();
  });
});
