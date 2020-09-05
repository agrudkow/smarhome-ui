import styled from 'styled-components';
import { TextField as MUITextField } from '@material-ui/core';

export const TextField = styled(MUITextField)`
  & .MuiOutlinedInput-root {
    border-radius: ${({
      theme: {
        layout: { borderRadius },
      },
    }) => borderRadius};
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
