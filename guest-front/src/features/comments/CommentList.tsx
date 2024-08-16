import {Card, CardContent, CardMedia, Stack, Typography} from '@mui/material';

const CommentList = () => {
  return (
    <Stack spacing={2} padding={2}>
        <Card variant="outlined">
            <CardMedia
              component="img"
              height="140"
              alt="Comment image"
              image={'data:image/png;base64,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'}
            />
          <CardContent>
            <Typography variant="subtitle1">
              Anonymous
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Comment
            </Typography>
          </CardContent>
        </Card>
    </Stack>
  );
};

export default CommentList;