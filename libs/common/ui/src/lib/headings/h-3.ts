import styled from 'styled-components';

export const H3 = styled.h3`
  color: ${props => props.theme.palette.heading};
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;

  ${props => props.theme.breakpoints.desktop} {
    font-size: 30px;
    letter-spacing: -0.3px;
    line-height: 30px;
  }
`;

export default H3;
