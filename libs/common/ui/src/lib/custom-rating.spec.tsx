import React from 'react';
import { render } from '@testing-library/react';

import CustomRating from './custom-rating';

describe(' Rating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomRating />);
    expect(baseElement).toBeTruthy();
  });
});
