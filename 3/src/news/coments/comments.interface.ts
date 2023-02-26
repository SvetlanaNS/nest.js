export interface Comment {
  id?: number;
  message: string;
  author: string;
}

export type CommentEdit = Partial<Comments>;

export type Comments = Record<string | number, Comment[]>;
