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
      palette: { primary },
    },
  }) => primary};
  color: ${({
    theme: {
      palette: { secondaryBackground },
    },
  }) => secondaryBackground};
  opacity: 0.7;

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
