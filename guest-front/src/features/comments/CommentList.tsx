import {Card, CardContent, CardMedia, Stack, styled, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {fetchComment} from './commentThunk.ts';
import {useEffect} from 'react';
import {selectComments} from './commentSlice.ts';
import {apiURL} from '../../constants.ts';

const ImageCardMedia = styled(CardMedia)({
  height: '130px',
  width: '130px',
});

const CommentList = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);

  useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);

  return (
    <Stack spacing={2} padding={2}>
      {comments.map((comment) => (
        <Card key={comment.id} variant="outlined">
            <ImageCardMedia
              image={`${apiURL}/images/${comment.image}`}
              title={comment.author}
            />
          <CardContent>
            <Typography variant="subtitle1">
              {comment.author || 'Anonymous'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comment.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default CommentList;