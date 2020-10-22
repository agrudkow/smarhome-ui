import React from 'react';
import { render } from '@testing-library/react';

import ActionButtons from './action-buttons';

describe(' ActionButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActionButtons />);
    expect(baseElement).toBeTruthy();
  });
});
