import React from 'react';
import { render } from '@testing-library/react';

import SupplierScreenUi from './supplier-screen-ui';

describe(' SupplierScreenUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierScreenUi />);
    expect(baseElement).toBeTruthy();
  });
});
