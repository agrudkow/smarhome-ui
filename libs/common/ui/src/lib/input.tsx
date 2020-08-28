import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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

export const Input: FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput>
      <TextField
        id="input-normal"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
