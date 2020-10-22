import React from 'react';
import CustomRating from './custom-rating';
import { customRender } from '@smarthome/common/logic';

describe(' Rating', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(<CustomRating name="test-name" />);
    expect(baseElement).toBeTruthy();
  });
});
