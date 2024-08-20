import {Button, Input, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useAppDispatch} from '../../app/hooks.ts';
import {CommentMutation} from '../../types.ts';
import {createComment} from './commentThunk.ts';
import {useNavigate} from 'react-router-dom';

const CommentForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [comment, setComment] = useState<CommentMutation>({
    author: '',
    comment: '',
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setComment(prevState => ({...prevState, [name]: value}));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if(files) {
      setComment((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!comment.comment) {
      console.warn('Comment is not required')
    }

    dispatch(createComment(comment));
    setComment({
      author: '',
      comment: '',
      image: null,
    });
    navigate('/');
  }

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit} padding={2} border={1} borderColor="grey.300" borderRadius={2}>
      <Typography variant="h6">Add a Comment</Typography>
      <TextField
        label="Author"
        name='author'
        type='text'
        value={comment.author}
        onChange={handleInputChange}
      />
      <TextField
        label="Comment"
        name='comment'
        type='text'
        value={comment.comment}
        onChange={handleInputChange}
        required
      />
      <Input
        type="file"
        name='image'
        onChange={handleFileChange}
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Stack>
  );
};

export default CommentForm;