import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'nortification',
  initialState: { notification: null },

  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
