import {createSlice} from '@reduxjs/toolkit';
import {Comment} from '../../types.ts'
import {createComment} from './commentThunk.ts';

export interface CommentsSlice {
  comments: Comment[];
  isLoading: boolean;
  error: null | string;
}

export const initialState: CommentsSlice = {
  comments: [],
  isLoading: false,
  error: null,
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createComment.rejected, (state) => {
        state.error = 'Something went wrong';
      });
  }
})


export const commentReducer = commentSlice.reducer;