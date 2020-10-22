import React, { FC } from 'react';

import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface FloatingAddButtonProps {
  onClick: () => void;
  hoverText: string;
  textWidth?: number;
}

const StyledFloatingAddButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledFloatingButton = styled(Fab)<{ textwidth: number }>`
  width: 56px;
  height: 56px;
  border-radius: 26px;
  overflow: hidden;
  opacity: 0.6;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    opacity 0.3s ease-in-out, width 0.3s ease-in-out;
  background-color: ${({
    theme: {
      palette: { primary },
    },
  }) => primary};
  color: ${({
    theme: {
      palette: { secondaryBackground },
    },
  }) => secondaryBackground};

  .add-icon {
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
    color: ${({
      theme: {
        palette: { secondaryBackground },
      },
    }) => secondaryBackground};
    width: ${({ textwidth }) => textwidth}px;
    opacity: 1;

    .add-icon {
      width: 0;
    }
  }
`;

const HoverText = styled.span<{ textWidth: number }>`
  overflow: hidden;
  width: 0;
  white-space: nowrap;
  font-weight: 550;
  transition: width 0.3s ease-in-out;
  ${StyledFloatingButton}:hover & {
    width: ${({ textWidth }) => textWidth}px;
  }
`;

export const FloatingAddButton: FC<FloatingAddButtonProps> = ({
  onClick,
  hoverText,
  textWidth = 140,
}) => {
  return (
    <StyledFloatingAddButton>
      <StyledFloatingButton
        onClick={onClick}
        color="primary"
        aria-label="add"
        textwidth={textWidth}
      >
        <AddIcon className="add-icon" />
        <HoverText textWidth={textWidth}>{hoverText}</HoverText>
      </StyledFloatingButton>
    </StyledFloatingAddButton>
  );
};

export default FloatingAddButton;
