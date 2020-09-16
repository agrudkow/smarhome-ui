import React from 'react';
import { render } from '@testing-library/react';

import SnackbarErrorSubscriber from './snackbar-error-subscriber';

describe(' SnackbarErrorSubscriber', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnackbarErrorSubscriber />);
    expect(baseElement).toBeTruthy();
  });
});
