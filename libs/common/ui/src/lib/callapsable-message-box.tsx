import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { regularTypography } from './p';

export interface CallapsableMessageBoxProps {
  show: boolean;
}

interface StyledCallapsableMessageBoxProps extends CallapsableMessageBoxProps {
  heightInPixels: number;
}

const StyledCallapsableMessageBox = styled.div<
  StyledCallapsableMessageBoxProps
>`
  ${regularTypography}

  margin-top: 0px;
  margin-left: 2px;
  padding: 5px;
  width: 100%;
  height: ${({ show, heightInPixels }) => (show ? `${heightInPixels}px` : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: height 0.3s ease-in-out, visibility 0.3s ease-in-out;
  border: 2px dashed
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  border-radius: 6px;
`;

export const CallapsableMessageBox: FC<CallapsableMessageBoxProps> = ({
  show,
  children,
}) => {
  const innerDivRef = useRef<HTMLDivElement>(null);
  const messageBoxHeight = innerDivRef.current?.offsetHeight ?? 0;

  return (
    <StyledCallapsableMessageBox show={show} heightInPixels={messageBoxHeight}>
      <div ref={innerDivRef}>{children}</div>
    </StyledCallapsableMessageBox>
  );
};

export default CallapsableMessageBox;
