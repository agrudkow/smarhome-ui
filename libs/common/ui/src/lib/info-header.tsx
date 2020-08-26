import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { StyledOvalBoxContainer } from './oval-box-container';
import { H3 } from './headings';
import InfoButton from './info-button';
import CallapsableMessageBox from './callapsable-message-box';

export interface InfoHeaderProps {
  headerText: string;
  infoMessageText: string;
}

const StyledInfoHeader = styled(StyledOvalBoxContainer)`
  padding: 5px 0;
  flex-direction: column;
`;

const HeaderRowContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
    <StyledInfoHeader
      backgroundColor={'transparent'}
      boxShadow={false}
      opacity={0.8}
    >
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
