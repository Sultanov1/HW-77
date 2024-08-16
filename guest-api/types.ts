export interface Comment {
  id: string;
  author: string;
  comment: string;
  image: string | null;
}

export type CommentMutation = {
  author: string;
  comment: string;
  image: string | null;
};