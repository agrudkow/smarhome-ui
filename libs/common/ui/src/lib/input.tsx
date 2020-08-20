import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export interface InputProps {
  placeholder: string;
}

const StyledInput = styled.div`
  width: 100%;
  margin: 0 8px;
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
