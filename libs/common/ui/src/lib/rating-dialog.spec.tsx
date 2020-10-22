import React from 'react';
import { customRender } from '@smarthome/common/logic';
import RatingDialog from './rating-dialog';
import { fireEvent } from '@testing-library/react';

describe(' RatingDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <RatingDialog
        open={true}
        title=""
        description=""
        rating={0}
        onClose={jest.fn()}
        onRatingChange={jest.fn()}
        onSend={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <RatingDialog
        open={true}
        title=""
        description=""
        rating={0}
        onClose={jest.fn()}
        onRatingChange={jest.fn()}
        onSend={jest.fn()}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should call handler function on send rating', () => {
    const handleSend = jest.fn();
    const { getByText } = customRender(
      <RatingDialog
        open={true}
        title=""
        description=""
        rating={4}
        onClose={jest.fn()}
        onRatingChange={jest.fn()}
        onSend={handleSend}
      />
    );
    fireEvent.click(getByText('Send'));
    expect(handleSend).toHaveBeenCalledTimes(1);
  });

  it('should call handler function on close rating dailog', () => {
    const handleClose = jest.fn();
    const { getByText } = customRender(
      <RatingDialog
        open={true}
        title=""
        description=""
        rating={4}
        onSend={jest.fn()}
        onRatingChange={jest.fn()}
        onClose={handleClose}
      />
    );
    fireEvent.click(getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
