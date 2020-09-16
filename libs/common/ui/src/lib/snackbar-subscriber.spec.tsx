import React from 'react';
import { render } from '@testing-library/react';

import SnackbarSubscriber from './snackbar-subscriber';

describe(' SnackbarSubscriber', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnackbarSubscriber />);
    expect(baseElement).toBeTruthy();
  });
});
