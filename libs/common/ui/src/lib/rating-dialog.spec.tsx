import React from 'react';
import { render } from '@testing-library/react';

import RatingDialog from './rating-dialog';

describe(' RatingDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RatingDialog />);
    expect(baseElement).toBeTruthy();
  });
});
