import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import {CommentMutation} from '../../types.ts';

export const fetchComment = createAsyncThunk<Comment[]>('comments/fetchAll', async () => {
  const { data: products } = await axiosApi.get<Comment[]>('/comments');
  return products;
});

export const createComment = createAsyncThunk<void, CommentMutation>('comment/createComment',
  async (comment) => {
    const formData = new FormData();
    formData.append('author', comment.author);
    formData.append('comment', comment.comment);

    if(comment.image) {
      formData.append('image', comment.image);
    }

    await axiosApi.post('/comments', formData);
  }
);
