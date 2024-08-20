import {createSlice} from '@reduxjs/toolkit';
import {Comment} from '../../types.ts'
import {createComment, fetchComment} from './commentThunk.ts';

export interface CommentsSlice {
  comments: Comment[];
  items: Comment | null
  isLoading: boolean;
  error: null | string;
}

export const initialState: CommentsSlice = {
  items: null,
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
    builder
      .addCase(fetchComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchComment.fulfilled, (state, {payload: items}) => {
        state.isLoading = false;
        state.comments = items;
      })
      .addCase(fetchComment.rejected, (state) => {
        state.error = 'Something went wrong';
      })
  },
  selectors: {
    selectComments: (state) => state.comments,
  },
})

export const commentReducer = commentSlice.reducer;

export const {
  selectComments
} = commentSlice.selectors;