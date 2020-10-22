import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import OutlinedButton from './outlined-button';

export interface RatingDialogProps {
  title: string;
  description: string;
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

export const RatingDialog: FC<RatingDialogProps> = ({
  open,
  title,
  description,
  rating,
  onClose,
  onRatingChange,
  onSend,
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="rating-dialog">
      <DialogTitle id="'rating-dialogg-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
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
          <OutlinedButton onClick={onSend} style={{ margin: '5px 0 0' }}>
            Send
          </OutlinedButton>
          <OutlinedButton onClick={onClose} style={{ margin: '5px 0 0' }}>
            Close
          </OutlinedButton>
        </ButtonsContainer>
      </DialogActions>
    </Dialog>
  );
};

export default RatingDialog;
