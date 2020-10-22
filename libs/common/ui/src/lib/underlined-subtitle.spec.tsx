import React from 'react';
import { customRender } from '@smarthome/common/logic';
import UnderlinedSubtitle from './underlined-subtitle';

describe(' UnderlinedSubtitle', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<UnderlinedSubtitle />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<UnderlinedSubtitle />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set border-bottom color to red', () => {
    const { container } = customRender(<UnderlinedSubtitle color="red" />);
    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      '2px solid red'
    );
  });
});
