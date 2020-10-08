import React, { FC } from 'react';
import styled from 'styled-components';

interface UnderlinedContainerProps {
  color?: string;
}

const StyledUnderlinedContainer = styled.div<UnderlinedContainerProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid
    ${({
      theme: {
        palette: { primary },
      },
      color,
    }) => color || primary};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

/**
 * UnderlinedContainer component displays underlined container.
 *
 * @param props UnderlinedContainerProps
 */
export const UnderlinedContainer: FC<UnderlinedContainerProps> = ({
  children,
  color,
}) => (
  <StyledUnderlinedContainer color={color}>
    {children}
  </StyledUnderlinedContainer>
);

export default UnderlinedContainer;
