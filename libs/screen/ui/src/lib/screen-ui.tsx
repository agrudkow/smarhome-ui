import React from 'react';
import styled from 'styled-components';
import { CommonUi } from '@smarthome/common/ui';

const StyledScreenUi = styled.div``;

export const ScreenUi: React.FC = () => {
  return (
    <StyledScreenUi>
      <CommonUi />
    </StyledScreenUi>
  );
};

export default ScreenUi;
