import React from 'react';
import { render } from '@testing-library/react';

import TestSyntax from './test-syntax';

describe(' TestSyntax', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestSyntax />);
    expect(baseElement).toBeTruthy();
  });
});
