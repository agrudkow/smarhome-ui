import React from 'react';
import { render } from '@testing-library/react';

import AddEntity from './add-entity';

describe(' AddEntity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddEntity />);
    expect(baseElement).toBeTruthy();
  });
});
