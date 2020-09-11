import React from 'react';
import { render } from '@testing-library/react';

import SupplierFeatureUserUi from './supplier-feature-user-ui';

describe(' SupplierFeatureUserUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierFeatureUserUi />);
    expect(baseElement).toBeTruthy();
  });
});
