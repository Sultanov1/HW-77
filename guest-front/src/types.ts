export interface Comment {
  id: string;
  author: string;
  comment: string;
  image: string | null;
}

export interface CommentMutation {
  author: string;
  comment: string;
  image: string | null;
}
