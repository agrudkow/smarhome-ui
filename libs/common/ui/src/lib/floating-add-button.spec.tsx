import React from 'react';
import { customRender } from '@smarthome/common/logic';
import FloatingAddButton from './floating-add-button';

describe(' FloatingAddButton', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <FloatingAddButton onClick={jest.fn()} hoverText="" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <FloatingAddButton onClick={jest.fn()} hoverText="" />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set hover text', () => {
    const hoverText = 'Test hover text';
    const { getByText } = customRender(
      <FloatingAddButton onClick={jest.fn()} hoverText={hoverText} />
    );
    expect(getByText(hoverText)).toBeTruthy();
  });
});
