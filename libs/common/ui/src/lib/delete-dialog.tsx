import React, { FC } from 'react';

import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import OutlinedButton from './outlined-button';

export interface DeleteDialogProps {
  /**State of dialog window.*/
  open: boolean;
  /**Callback funcion called on dialog window close or cancel button click.*/
  onClose: () => void;
  /**Callback funcion called on confirm button click.*/
  onConfirm: () => void;
  /**Title fo dialog window.*/
  title: string;
  /**Descritpion displayed under title text.*/
  description: string;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    padding: 0;
  }
`;

/**
 * DeleteDialog compoent displays dialog window (@see https://material-ui.com/components/dialogs/) for confirmating or cancelling deleting acition
 *
 * @param props DeleteDialogProps
 */
export const DeleteDialog: FC<DeleteDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="delete-dialog">
      <DialogTitle id="'rating-dialogg-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonsContainer>
          <OutlinedButton onClick={onConfirm} style={{ margin: '5px 0 0' }}>
            Confirm
          </OutlinedButton>
          <OutlinedButton onClick={onClose} style={{ margin: '5px 0 0' }}>
            Close
          </OutlinedButton>
        </ButtonsContainer>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
