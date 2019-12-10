import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ScreenServiceProps {}

const StyledScreenService = styled.div`
  color: pink;
`;

export const ScreenService = (props: ScreenServiceProps) => {
  return (
    <StyledScreenService>
      <h1>Welcome to screen-service component!</h1>
    </StyledScreenService>
  );
};

export default ScreenService;
