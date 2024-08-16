import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import {CommentMutation} from '../../types.ts';

export const createComment = createAsyncThunk<void, CommentMutation >('comments/createComment', async (commentData) => {
  const {data: comment} = await axiosApi.post('/comments', commentData);
  return comment;
});