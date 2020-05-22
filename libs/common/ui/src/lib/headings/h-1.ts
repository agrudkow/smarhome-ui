import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.palette.heading};
  font-size: 26px;
  font-weight: bold;
  line-height: 24px;

  ${(props) => props.theme.breakpoints.desktop} {
    font-size: 64px;
    letter-spacing: -1px;
    line-height: 77px;
    text-align: center;
  }
`;

export default H1;
