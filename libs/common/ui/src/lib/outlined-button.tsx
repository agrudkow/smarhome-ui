import React, { FC, CSSProperties } from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '@material-ui/core';

interface CustomButtonProps {
  customColor?: string;
  customBorderColor?: string;
}

export interface OutlinedButtonProps extends CustomButtonProps {
  onClick: () => void;
  style?: CSSProperties;
}

const StyledOutlinedButton = styled(
  <T extends CustomButtonProps & ButtonProps>({
    customBorderColor,
    customColor,
    ...props
  }: T) => <Button {...props} />
)`
  color: ${({
    theme: {
      palette: { paragraph },
    },
    customColor,
  }) => customColor || paragraph};
  border-color: ${({
    theme: {
      palette: { paragraph },
    },
    customBorderColor,
  }) => customBorderColor || paragraph};
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  font-weight: 550;
  width: 100%;

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
`;

export const OutlinedButton: FC<OutlinedButtonProps> = ({
  onClick,
  style,
  children,
  customBorderColor,
  customColor,
}) => {
  return (
    <StyledOutlinedButton
      variant="outlined"
      color="primary"
      onClick={onClick}
      style={style}
      customBorderColor={customBorderColor}
      customColor={customColor}
    >
      {children}
    </StyledOutlinedButton>
  );
};

export default OutlinedButton;
