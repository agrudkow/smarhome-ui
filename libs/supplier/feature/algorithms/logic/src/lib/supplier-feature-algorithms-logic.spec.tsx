import React from 'react';
import { render } from '@testing-library/react';

import SupplierFeatureAlgorithmsLogic from './supplier-feature-algorithms-logic';

describe(' SupplierFeatureAlgorithmsLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupplierFeatureAlgorithmsLogic />);
    expect(baseElement).toBeTruthy();
  });
});
