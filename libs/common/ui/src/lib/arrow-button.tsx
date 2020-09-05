import React, { FC } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton, IconButtonProps } from '@material-ui/core';

export interface ArrowIconProps {
  rotate?: string;
}

const ArrowIcon = styled(ArrowForwardIosIcon)<ArrowIconProps>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: rotate(${({ rotate: rotateDeg }) => rotateDeg || 0});
  color: ${({
    theme: {
      palette: { primary },
    },
  }) => primary};
`;

/**
 * Arrow button extending MaterialUI IconButton
 * @see https://material-ui.com/components/buttons/#icon-buttons
 * @param rotate rotation in degres
 * @example <ArrowButton rotate='90deg' />
 */
export const ArrowButton: FC<IconButtonProps & ArrowIconProps> = ({
  rotate,
  ...props
}) => {
  return (
    <IconButton {...props}>
      <ArrowIcon rotate={rotate} />
    </IconButton>
  );
};

export default ArrowButton;
