import React from 'react';
import { customRender } from '@smarthome/common/logic';
import NotFoundPage from './not-found-page';

describe(' NotFoundPage', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<NotFoundPage />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(<NotFoundPage />);
    expect(baseElement.firstChild).toMatchSnapshot();
  });
});
