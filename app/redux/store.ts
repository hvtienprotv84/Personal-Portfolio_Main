import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationsSlice';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
