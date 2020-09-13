import React from 'react';
import { render } from '@testing-library/react';

import UnderlinedSubtitle from './underlined-subtitle';

describe(' UnderlinedSubtitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnderlinedSubtitle />);
    expect(baseElement).toBeTruthy();
  });
});
