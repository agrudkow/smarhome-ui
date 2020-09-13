import React, { FC } from 'react';
import styled from 'styled-components';
import { BaseButton, P } from '@smarthome/common/ui';

export interface TestSyntaxProps {
  onTestSyntex: () => void;
}

const StyledTestSyntax = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  width: 150px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
  }
`;

export const TestSyntax: FC<TestSyntaxProps> = ({ onTestSyntex }) => {
  return (
    <StyledTestSyntax>
      <StatusContainer>
        <P>
          Status:&nbsp;<b>Ok</b>
        </P>
      </StatusContainer>
      <StyledButtonContainer>
        <BaseButton onClick={onTestSyntex}>Test</BaseButton>
      </StyledButtonContainer>
    </StyledTestSyntax>
  );
};

export default TestSyntax;
