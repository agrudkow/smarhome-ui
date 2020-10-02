import React from 'react';
import Header from './header';
import { customRender } from '@smarthome/common/logic';

describe(' Header', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <Header
        showViewName={false}
        viewName="Test"
        onButtonClick={jest.fn()}
        loading={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <Header
        showViewName={false}
        viewName="Test"
        onButtonClick={jest.fn()}
        loading={false}
      />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });

  it('should set view name', () => {
    const viewName = 'Test view name';
    const { getByText } = customRender(
      <Header
        showViewName={false}
        viewName={viewName}
        onButtonClick={jest.fn()}
        loading={false}
      />
    );
    expect(getByText(viewName)).toBeTruthy();
  });
});
