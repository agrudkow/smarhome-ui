import React from 'react';
import { render } from '@testing-library/react';

import SelectAlgorithm from './select-algorithm';

describe(' SelectAlgorithm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectAlgorithm />);
    expect(baseElement).toBeTruthy();
  });
});
