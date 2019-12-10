import React from 'react';
import { render } from '@testing-library/react';

import CommonService from './common-service';

describe(' CommonService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonService />);
    expect(baseElement).toBeTruthy();
  });
});
