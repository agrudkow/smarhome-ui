import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonServiceProps {}

const StyledCommonService = styled.div`
  color: pink;
`;

export const CommonService = (props: CommonServiceProps) => {
  return (
    <StyledCommonService>
      <h1>Welcome to common-service component!</h1>
    </StyledCommonService>
  );
};

export default CommonService;
