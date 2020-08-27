import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { Rating, OutlinedButton } from '@smarthome/common/ui';

export interface RatingDialogProps {
  open: boolean;
  rating: number;
  onClose: () => void;
  onRatingChange: (_: unknown, newValue: number | null) => void;
  onSend: () => void;
}

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
`;

export const RatingDialog: FC<RatingDialogProps> = ({
  open,
  rating,
  onClose,
  onRatingChange,
  onSend,
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="rating-dialog">
      <DialogTitle id="'rating-dialogg-title">Rate algorithm</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please select number of stars (1-5) which corresponds with how well
          given algorithm do its job.
        </DialogContentText>
        <RatingContainer>
          <Rating
            name="rating-dialog"
            value={rating}
            onChange={onRatingChange}
            precision={0.5}
            size="large"
          />
        </RatingContainer>
      </DialogContent>
      <DialogActions>
        <ButtonsContainer>
          <OutlinedButton onClick={onClose}>Close</OutlinedButton>
          <OutlinedButton onClick={onSend}>Send</OutlinedButton>
        </ButtonsContainer>
      </DialogActions>
    </Dialog>
  );
};

export default RatingDialog;
