import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '@material-ui/core';

export interface BaseButtonProps extends ButtonProps {
  component?: string;
}

const StyledBaseButton = styled(Button)`
  width: 100%;
  font-weight: 550;
  white-space: nowrap;
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
`;

export const BaseButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBaseButton variant="contained" color="primary" {...props}>
      {children}
    </StyledBaseButton>
  );
};

export default BaseButton;
