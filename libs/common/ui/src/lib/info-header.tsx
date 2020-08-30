import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { H3 } from './headings';
import InfoButton from './info-button';
import CallapsableMessageBox from './callapsable-message-box';

export interface InfoHeaderProps {
  headerText: string;
  infoMessageText: string;
}

const StyledInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.8;
`;

const HeaderRowContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    justify-content: center;
  }
`;

export const InfoHeader: FC<InfoHeaderProps> = ({
  headerText,
  infoMessageText,
}) => {
  const [showInfoMessage, setShowInfoMessage] = useState<boolean>(false);

  const handleInfoButtonClick = useCallback(() => {
    setShowInfoMessage(!showInfoMessage);
  }, [showInfoMessage]);

  return (
    <StyledInfoHeader>
      <HeaderRowContainer>
        <H3>{headerText}</H3>
        <InfoButton onClick={handleInfoButtonClick} />
      </HeaderRowContainer>
      <CallapsableMessageBox show={showInfoMessage}>
        {infoMessageText}
      </CallapsableMessageBox>
    </StyledInfoHeader>
  );
};

export default InfoHeader;
