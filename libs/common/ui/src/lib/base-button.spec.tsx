import React from 'react';
import { render } from '@testing-library/react';

import BaseButton from './base-button';

describe(' BaseButtonr', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseButton />);
    expect(baseElement).toBeTruthy();
  });
});
