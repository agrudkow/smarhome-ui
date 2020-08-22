import React, { FC, CSSProperties } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export interface BaseButtonProps {
  onClick: () => void;
  style?: CSSProperties;
}

const StyledBaseButton = styled(Button)`
  background-color: ${({
    theme: {
      palette: { secondarySidebarContrastBackground },
    },
  }) => secondarySidebarContrastBackground};
  color: ${({
    theme: {
      palette: { primaryBackground },
    },
  }) => primaryBackground};

  opacity: 0.7;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

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
  }

  font-weight: 550;
`;

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  onClick,
  style,
}) => {
  return (
    <StyledBaseButton
      variant="contained"
      color="primary"
      onClick={onClick}
      style={style}
    >
      {children}
    </StyledBaseButton>
  );
};

export default BaseButton;
