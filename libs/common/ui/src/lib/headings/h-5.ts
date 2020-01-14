import styled from 'styled-components';

export const H5 = styled.h5`
  color: ${props => props.theme.palette.heading};
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;

  ${props => props.theme.breakpoints.desktop} {
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
  }
`;

export default H5;
