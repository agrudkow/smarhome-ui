import React from 'react';
import { render } from '@testing-library/react';

import SupplierFeatureUserLogic from './supplier-feature-user-logic';

describe(' SupplierFeatureUserLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierFeatureUserLogic />);
    expect(baseElement).toBeTruthy();
  });
});
