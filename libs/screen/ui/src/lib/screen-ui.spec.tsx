import React from 'react';
import { render } from '@testing-library/react';

import ScreenUi from './screen-ui';

describe(' ScreenUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScreenUi />);
    expect(baseElement).toBeTruthy();
  });
});
