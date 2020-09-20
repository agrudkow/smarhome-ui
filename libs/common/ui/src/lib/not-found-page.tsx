import React, { FC } from 'react';
import styled from 'styled-components';
import { H2 } from './headings';
import { regularSpaceBetweenViewStyle } from './regular-space-between-view-style';

const StyledNotFoundPage = styled.div`
  ${regularSpaceBetweenViewStyle}

  justify-content: center;
  align-items: center;
`;

export const NotFoundPage: FC = () => {
  return (
    <StyledNotFoundPage>
      <H2>404</H2>
      <br />
      <H2>Page not found!</H2>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
