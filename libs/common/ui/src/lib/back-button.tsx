import React, { FC } from 'react';
import styled from 'styled-components';
import BaseButton, { BaseButtonProps } from './base-button';

/* eslint-disable-next-line */
export interface BackButtonProps extends BaseButtonProps {}

const StyledBackButton = styled.div`
  margin-top: 15px;
`;

/**
 * BackButton component extending BaseButton
 *
 * @param props BackButtonProps
 */
export const BackButton: FC<BackButtonProps> = (props) => {
  return (
    <StyledBackButton>
      <BaseButton {...props}>Back</BaseButton>
    </StyledBackButton>
  );
};

export default BackButton;
