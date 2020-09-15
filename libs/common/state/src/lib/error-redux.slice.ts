import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ErrorState {
  errors: Array<string>;
}

const initialState: ErrorState = {
  errors: [],
};

export const name = 'errors' as const;

const errors = createSlice({
  name,
  initialState,
  reducers: {
    pushError(state, action: PayloadAction<string>) {
      state.errors.push(action.payload);
    },
    popError(state) {
      state.errors.pop();
    },
  },
});

export const { pushError, popError } = errors.actions;
export const { reducer } = errors;
