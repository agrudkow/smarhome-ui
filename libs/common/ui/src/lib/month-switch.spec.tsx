import React from 'react';
import { render } from '@testing-library/react';

import MonthSwitch from './month-switch';

describe(' MonthSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonthSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
