import React from 'react';
import { customRender } from '@smarthome/common/logic';
import OutlinedButton from './outlined-button';
import { fireEvent } from '@testing-library/react';

describe(' OutlinedButton', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <OutlinedButton onClick={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <OutlinedButton onClick={jest.fn()} />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should call handler function on click', () => {
    const innerText = 'Button';
    const handleClick = jest.fn();
    const { getByText } = customRender(
      <OutlinedButton onClick={handleClick}>{innerText}</OutlinedButton>
    );
    fireEvent.click(getByText(innerText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be dissabled', () => {
    const innerText = 'Button';
    const { getByText } = customRender(
      <OutlinedButton onClick={jest.fn()} disabled>
        {innerText}
      </OutlinedButton>
    );
    expect(getByText(innerText).closest('button')).toBeDisabled();
  });

  it('should not be dissabled', () => {
    const innerText = 'Button';
    const { getByText } = customRender(
      <OutlinedButton onClick={jest.fn()}>{innerText}</OutlinedButton>
    );
    expect(getByText(innerText).closest('button')).not.toBeDisabled();
  });

  it('should set custom border color', () => {
    const borderColor = 'red';
    const { container } = customRender(
      <OutlinedButton onClick={jest.fn()} customBorderColor={borderColor} />
    );
    expect(container.firstChild).toHaveStyleRule('border-color', borderColor);
  });

  it('should set custom color', () => {
    const color = 'red';
    const { container } = customRender(
      <OutlinedButton onClick={jest.fn()} customColor={color} />
    );
    expect(container.firstChild).toHaveStyleRule('color', color);
  });
});
