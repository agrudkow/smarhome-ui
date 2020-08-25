import React from 'react';
import { render } from '@testing-library/react';

import FetchAlgorithmsList from './fetch-algorithms-list';

describe(' FetchAlgorithmsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FetchAlgorithmsList />);
    expect(baseElement).toBeTruthy();
  });
});
