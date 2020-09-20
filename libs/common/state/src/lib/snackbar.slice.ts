import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VariantType } from 'notistack';

export interface SnackbarMessage {
  message: string;
  variant: VariantType;
}

export interface SnackbarState {
  messages: Array<SnackbarMessage>;
}

const initialState: SnackbarState = {
  messages: [],
};

export const name = 'snackbar' as const;

const snackbar = createSlice({
  name,
  initialState,
  reducers: {
    pushMessage(state, action: PayloadAction<SnackbarMessage>) {
      state.messages.push(action.payload);
    },
    popMessage(state) {
      state.messages.shift();
    },
  },
});

export const { pushMessage, popMessage } = snackbar.actions;
export const { reducer } = snackbar;
