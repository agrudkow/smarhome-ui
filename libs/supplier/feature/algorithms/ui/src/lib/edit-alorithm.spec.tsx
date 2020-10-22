import React from 'react';
import { render } from '@testing-library/react';

import EditAlorithm from './edit-alorithm';

describe(' EditAlorithm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditAlorithm />);
    expect(baseElement).toBeTruthy();
  });
});
