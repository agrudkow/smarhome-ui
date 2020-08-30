import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { OutlinedButton } from '@smarthome/common/ui';

export interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
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

export const DeleteDialog: FC<DeleteDialogProps> = ({
  open,
  onClose,
  onConfirm: onSend,
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="delete-dialog">
      <DialogTitle id="'rating-dialogg-title">Delete datase</DialogTitle>
      <DialogContent>
        <DialogContentText>Please confirm deleting dataset.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonsContainer>
          <OutlinedButton onClick={onSend} style={{ margin: '5px 0 0' }}>
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
