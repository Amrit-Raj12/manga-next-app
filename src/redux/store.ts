import { configureStore } from '@reduxjs/toolkit';
import mangaReducer from './mangaSlice';

export const store = configureStore({
  reducer: {
    manga: mangaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
