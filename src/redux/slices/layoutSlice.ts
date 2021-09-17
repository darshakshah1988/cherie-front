import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  authFormOverlay: false
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    showAuthFormOverlay: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.authFormOverlay = action.payload.authFormOverlay;
    }
  }
});

// Reducers and actions
export const { showAuthFormOverlay } = layoutSlice.actions;

// Selectors
export const getAuthFormOverlay = (state: {
  layout: { authFormOverlay: boolean };
}) => state.layout.authFormOverlay;

export default layoutSlice.reducer;
