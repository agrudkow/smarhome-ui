import React from 'react';
import { customRender } from '@smarthome/common/logic';
import DeleteDialog from './delete-dialog';
import { fireEvent } from '@testing-library/react';

describe(' DeleteDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = customRender(
      <DeleteDialog
        open={true}
        title=""
        description=""
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = customRender(
      <DeleteDialog
        open={true}
        title=""
        description=""
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should set title', () => {
    const title = 'Test title';
    const { getByText } = customRender(
      <DeleteDialog
        open={true}
        title={title}
        description=""
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      />
    );
    expect(getByText(title)).toBeTruthy();
  });

  it('should set description', () => {
    const description = 'Test description';
    const { getByText } = customRender(
      <DeleteDialog
        open={true}
        description={description}
        title=""
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      />
    );
    expect(getByText(description)).toBeTruthy();
  });

  it('should call handler function on confirm', () => {
    const handleConfirm = jest.fn();
    const { getByText } = customRender(
      <DeleteDialog
        open={true}
        title=""
        description=""
        onClose={jest.fn()}
        onConfirm={handleConfirm}
      />
    );
    fireEvent.click(getByText('Confirm'));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });

  it('should call handler function on close rating dailog', () => {
    const handleClose = jest.fn();
    const { getByText } = customRender(
      <DeleteDialog
        open={true}
        title=""
        description=""
        onClose={handleClose}
        onConfirm={jest.fn()}
      />
    );
    fireEvent.click(getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
