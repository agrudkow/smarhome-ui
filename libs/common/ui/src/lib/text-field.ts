import styled from 'styled-components';
import { TextField as MUITextField } from '@material-ui/core';

export const TextField = styled(MUITextField)<{
  outlineColorWhenDissabled?: string;
}>`
  & .MuiOutlinedInput-root {
    border-radius: ${({
      theme: {
        layout: { borderRadius },
      },
    }) => borderRadius}px;
  }

  & .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: ${({ outlineColorWhenDissabled }) =>
      outlineColorWhenDissabled || 'inherit'};
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  }
`;

export default TextField;
