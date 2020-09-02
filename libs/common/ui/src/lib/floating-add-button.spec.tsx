import React from 'react';
import { render } from '@testing-library/react';

import FloatingAddButton from './floating-add-button';

describe(' FloatingAddButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FloatingAddButton />);
    expect(baseElement).toBeTruthy();
  });
});
