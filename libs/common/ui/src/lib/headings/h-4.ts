import styled from 'styled-components';

export const H4 = styled.h4`
  color: ${(props) => props.theme.palette.heading};
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;

  ${(props) => props.theme.breakpoints.desktop} {
    font-size: 26px;
    line-height: 24px;
  }
`;

export default H4;
