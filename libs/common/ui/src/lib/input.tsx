import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export interface InputProps {
  placeholder: string;
}

const StyledInput = styled.div`
  flex: 1;
  margin: 0 8px;

  & .MuiInput-underline:after {
    border-color: ${({
      theme: {
        palette: { primary },
      },
    }) => primary};
  }
`;

export const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <StyledInput>
      <TextField
        id="input-normal"
        placeholder={placeholder}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </StyledInput>
  );
};

export default Input;
