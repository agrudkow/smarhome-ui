import styled from 'styled-components';

export const H2 = styled.h2`
  color: ${props => props.theme.palette.heading};
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;

  ${props => props.theme.breakpoints.desktop} {
    font-size: 40px;
    letter-spacing: -0.4px;
    line-height: 40px;
    text-align: center;
  }
`;

export default H2;
