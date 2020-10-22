import React from 'react';
import { customRender } from '@smarthome/common/logic';
import MainContainer from './main-container';

describe(' MainContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <MainContainer dissableScroll={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <MainContainer dissableScroll={false} />
    );
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
