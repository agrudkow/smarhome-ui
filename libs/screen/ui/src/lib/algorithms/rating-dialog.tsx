import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RatingDialogProps {}

const StyledRatingDialog = styled.div`
  color: pink;
`;

export const RatingDialog = (props: RatingDialogProps) => {
  return (
    <StyledRatingDialog>
      <h1>Welcome to rating-dialog!</h1>
    </StyledRatingDialog>
  );
};

export default RatingDialog;
