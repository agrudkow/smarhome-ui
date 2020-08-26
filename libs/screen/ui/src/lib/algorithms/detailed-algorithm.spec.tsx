import React from 'react';
import { render } from '@testing-library/react';

import DetailedAlgorithm from './detailed-algorithm';

describe(' DetailedAlgorithm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailedAlgorithm />);
    expect(baseElement).toBeTruthy();
  });
});
