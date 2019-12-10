import React from 'react';
import { render } from '@testing-library/react';

import ScreenLogic from './screen-logic';

describe(' ScreenLogic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScreenLogic />);
    expect(baseElement).toBeTruthy();
  });
});
