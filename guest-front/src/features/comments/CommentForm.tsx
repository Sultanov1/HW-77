import {Button, Input, Stack, TextField, Typography} from '@mui/material';
import React from 'react';

const CommentForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit} padding={2} border={1} borderColor="grey.300" borderRadius={2}>
      <Typography variant="h6">Add a Comment</Typography>
      <TextField
        label="Author (optional)"
      />
      <TextField
        label="Comment"
        required
      />
      <Input
        type="file"
        required
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Stack>
  );
};

export default CommentForm;