import React from 'react';
import { render } from '@testing-library/react';

import UploadButton from './upload-button';

describe(' UploadButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadButton />);
    expect(baseElement).toBeTruthy();
  });
});
