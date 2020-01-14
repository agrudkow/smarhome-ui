import styled from 'styled-components';

export const H6 = styled.h6`
  color: ${props => props.theme.palette.heading};
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.003em;

  ${props => props.theme.breakpoints.desktop} {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }
`;

export default H6;
