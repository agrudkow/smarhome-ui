import React, { FC } from 'react';
import styled from 'styled-components';

export interface CellContainerProps {
  maxWidth?: string;
  maxHeight?: string;
}

const StyledCellContainer = styled.div<CellContainerProps>`
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
`;

export const CellContainer: FC<CellContainerProps> = ({
  children,
  maxWidth,
  maxHeight,
}) => {
  return (
    <StyledCellContainer maxWidth={maxWidth} maxHeight={maxHeight}>
      {children}
    </StyledCellContainer>
  );
};

export default CellContainer;
