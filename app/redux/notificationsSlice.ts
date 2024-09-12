import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: number;
  message: string;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [
    { id: 1, message: 'Chào mừng bạn đã đến với ngôi nhà nhỏ này của tôi 😍' },
    { id: 2, message: 'Rất vui được bạn ghé thăm và được biết bạn! 🤩' },
    { id: 3, message: 'Chúc bạn ngày mới vui vẻ! 🤠' },
  ],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Notification>) {
      state.notifications.push(action.payload);
    },
    removeNotification(state, action: PayloadAction<number>) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
