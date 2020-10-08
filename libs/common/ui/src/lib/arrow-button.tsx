import React, { FC } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton, IconButtonProps } from '@material-ui/core';

export interface ArrowIconProps extends IconButtonProps {
  /**Rotation in degres.*/
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

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 20px;
    height: 20px;
  }
`;

const CustomIconButton = styled(IconButton)`
  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    padding: 0;
  }
`;

/**
 * Arrow button extending MaterialUI IconButton
 * @see https://material-ui.com/components/buttons/#icon-buttons
 * @param props IconButtonProps - MaterialUI props
 * @example <ArrowButton rotate='90deg' />
 */
export const ArrowButton: FC<ArrowIconProps> = ({ rotate, ...props }) => {
  return (
    <CustomIconButton {...props}>
      <ArrowIcon rotate={rotate} />
    </CustomIconButton>
  );
};

export default ArrowButton;
