import React from 'react';
import { render } from '@testing-library/react';

import MainContainer from './main-container';

describe(' MainContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainContainer />);
    expect(baseElement).toBeTruthy();
  });
});
