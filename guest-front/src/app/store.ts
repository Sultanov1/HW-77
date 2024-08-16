import { configureStore } from '@reduxjs/toolkit';
import {commentReducer} from '../features/comments/commentSlice.ts';

export const store = configureStore({
  reducer: {
    "comment":  commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;