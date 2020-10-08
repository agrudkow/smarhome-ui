import React, { FC } from 'react';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton, Tooltip } from '@material-ui/core';

export interface InfoButtonProps {
  onClick: () => void;
}

const StyledInfoButton = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

/**
 * InfoButton component
 */
export const InfoButton: FC<InfoButtonProps> = ({ onClick }) => {
  return (
    <StyledInfoButton>
      <IconButton
        data-testid="info-button-icon"
        aria-label="info"
        onClick={onClick}
      >
        <Tooltip
          title={
            <span style={{ fontSize: '12px' }}>
              Click to reveale or hide information about current view.
            </span>
          }
          placement="right"
        >
          <InfoIcon fontSize="inherit" />
        </Tooltip>
      </IconButton>
    </StyledInfoButton>
  );
};

export default InfoButton;
