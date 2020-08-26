import React, { FC, CSSProperties } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export interface OutlinedButtonProps {
  onClick: () => void;
  style?: CSSProperties;
}

const StyledOutlinedButton = styled(Button)`
  color: ${({
    theme: {
      palette: { paragraph },
    },
  }) => paragraph};
  border-color: ${({
    theme: {
      palette: { paragraph },
    },
  }) => paragraph};
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  font-weight: 550;

  &:hover {
    color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
    border-color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  }

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    width: 100%;
  }
`;

export const OutlinedButton: FC<OutlinedButtonProps> = ({
  onClick,
  style,
  children,
}) => {
  return (
    <StyledOutlinedButton
      variant="outlined"
      color="primary"
      onClick={onClick}
      style={style}
    >
      {children}
    </StyledOutlinedButton>
  );
};

export default OutlinedButton;
