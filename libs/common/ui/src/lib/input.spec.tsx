import React from 'react';
import { customRender } from '@smarthome/common/logic';
import Input from './input';
import { fireEvent } from '@testing-library/react';

describe(' Input', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Input value="" placeholder="" onChange={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Input value="" placeholder="" onChange={jest.fn()} />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set placeholder', () => {
    const placeholder = 'Test place holder';
    const { getByPlaceholderText } = customRender(
      <Input value="" placeholder={placeholder} onChange={jest.fn()} />
    );
    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('should call handler function on input value change', () => {
    const placeholder = 'Test place holder';
    const handleChange = jest.fn();
    const { getByPlaceholderText } = customRender(
      <Input value="" placeholder={placeholder} onChange={handleChange} />
    );
    const input = getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: 'test change' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
