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

  padding: 5px;
  width: calc(100% - 14px);
  height: ${({ show, heightInPixels }) => (show ? `${heightInPixels}px` : 0)};
  margin: ${({ show }) => (show ? `10px 0` : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: height 0.3s ease-in-out, visibility 0.3s ease-in-out,
    margin 0.3s ease-in-out;
  border: 2px dashed
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  border-radius: 6px;
  text-align: justify;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    margin: ${({ show }) => (show ? `5px 0` : 0)};
  }
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
