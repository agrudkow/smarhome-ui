import React, { FC } from 'react';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton } from '@material-ui/core';

export interface InfoButtonProps {
  onClick: () => void;
}

const StyledInfoButton = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

export const InfoButton: FC<InfoButtonProps> = ({ onClick }) => {
  return (
    <StyledInfoButton>
      <IconButton aria-label="info" onClick={onClick}>
        <InfoIcon fontSize="inherit" />
      </IconButton>
    </StyledInfoButton>
  );
};

export default InfoButton;
