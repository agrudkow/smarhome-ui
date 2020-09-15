import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ErrorState {
  errors?: Array<string> | null;
}

const initialState: ErrorState = {
  errors: null,
};

export const name = 'errors' as const;

const errors = createSlice({
  name,
  initialState,
  reducers: {
    setErrors(state, action: PayloadAction<string[]>) {
      state.errors = action.payload;
    },
    hideErrors(state) {
      state.errors = null;
    },
  },
});

export const { setErrors, hideErrors } = errors.actions;
export const { reducer } = errors;
