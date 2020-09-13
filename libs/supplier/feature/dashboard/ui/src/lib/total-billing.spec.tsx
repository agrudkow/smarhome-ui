import React from 'react';
import { render } from '@testing-library/react';

import TotalBilling from './total-billing';

describe(' TotalBilling', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TotalBilling />);
    expect(baseElement).toBeTruthy();
  });
});
