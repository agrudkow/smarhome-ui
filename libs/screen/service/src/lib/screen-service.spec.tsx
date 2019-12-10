import React from 'react';
import { render } from '@testing-library/react';

import ScreenService from './screen-service';

describe(' ScreenService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScreenService />);
    expect(baseElement).toBeTruthy();
  });
});
