import React from 'react';
import { render } from '@testing-library/react';

import UploadNewFile from './upload-new-file';

describe(' UploadNewFile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadNewFile />);
    expect(baseElement).toBeTruthy();
  });
});
