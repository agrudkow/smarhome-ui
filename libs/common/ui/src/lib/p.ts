import styled, { css } from 'styled-components';

export const regularStyle = css`
  color: ${(props) => props.theme.palette.paragraph};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.3px;

  ${(props) => props.theme.breakpoints.desktop} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const P = styled.p`
  ${regularStyle}
`;

export default P;
