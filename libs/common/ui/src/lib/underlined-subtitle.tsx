import React, { FC } from 'react';
import styled from 'styled-components';

export interface UnderlinedSubtitleProps {
  color?: string;
}

const StyledUnderlinedSubtitle = styled.div<UnderlinedSubtitleProps>`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  opacity: 0.8;
  border-bottom: 2px solid
    ${({
      theme: {
        palette: { secondarySidebarContrastBackground },
      },
      color,
    }) => color || secondarySidebarContrastBackground};

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

/**
 * UnderlinedSubtitle component displays underlined container.
 *
 * @param props UnderlinedSubtitleProps
 */
export const UnderlinedSubtitle: FC<UnderlinedSubtitleProps> = ({
  children,
  color,
}) => {
  return (
    <StyledUnderlinedSubtitle color={color}>
      {children}
    </StyledUnderlinedSubtitle>
  );
};

export default UnderlinedSubtitle;
