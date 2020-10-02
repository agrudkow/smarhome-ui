import React from 'react';
import { customRender } from '@smarthome/common/logic';
import CellContainer from './cell-container';

describe(' CellContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<CellContainer />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<CellContainer />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set border-bottom color to red', () => {
    const maxHeight = '200px';
    const maxWidth = '400px';
    const { container } = customRender(
      <CellContainer maxHeight={maxHeight} maxWidth={maxWidth} />
    );
    expect(container.firstChild).toHaveStyleRule('max-width', maxWidth);
    expect(container.firstChild).toHaveStyleRule('max-height', maxHeight);
  });
});
