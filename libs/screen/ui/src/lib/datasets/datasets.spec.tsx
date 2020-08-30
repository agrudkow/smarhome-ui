import React from 'react';
import { render } from '@testing-library/react';

import Datasets from './datasets';

describe(' Datasets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Datasets />);
    expect(baseElement).toBeTruthy();
  });
});
