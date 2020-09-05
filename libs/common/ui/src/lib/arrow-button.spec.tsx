import React from 'react';
import { render } from '@testing-library/react';

import ArrowButton from './arrow-button';

describe(' ArrowButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArrowButton />);
    expect(baseElement).toBeTruthy();
  });
});
