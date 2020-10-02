import React from 'react';
import UploadButton from './upload-button';
import { customRender } from '@smarthome/common/logic';
import { fireEvent } from '@testing-library/react';

describe(' UploadButton', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<UploadButton onChange={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<UploadButton onChange={jest.fn()} />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should change label text to TEST_UPLOAD', () => {
    const { getByLabelText } = customRender(
      <UploadButton text={'TEST_UPLOAD'} onChange={jest.fn()} />
    );
    const input = getByLabelText('TEST_UPLOAD');
    expect(input).toBeTruthy();
  });

  it('should call handler function on input value change', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = customRender(
      <UploadButton onChange={handleChange} />
    );
    const input = getByLabelText('UPLOAD');
    fireEvent.change(input, { target: { files: ['test.txt'] } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
