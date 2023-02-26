import { Injectable } from '@nestjs/common';
import { Comments, Comment, CommentEdit } from './comments.interface';
import { getRandomInt } from '../../utils/getRandom';

@Injectable()
export class CommentsService {
  private readonly comments: Comments = {
    1: [
      {
        id: 123,
        message: 'мой первый комментарий',
        author: 'Вася',
      },
    ],
  };

  find(newsId: number): Comment[] | string {
    if (this.comments[newsId]) {
      return this.comments[newsId];
    }

    return 'Комментарии не найдены';
  }

  create(newsId: number, comment: Comment): string {
    const id = getRandomInt(0, 1000000);

    if (!this.comments[newsId]) {
      this.comments[newsId] = [];
    }

    this.comments[newsId].push({ id, ...comment });
    return 'Комментарий создан';
  }

  remove(newsId: number, commentId: number) {
    if (!this.comments[newsId]) {
      return null;
    }

    const indexComment = this.comments[newsId].findIndex(
      (comment) => comment.id === commentId,
    );

    if (indexComment === -1) {
      return null;
    }

    return this.comments[newsId].splice(indexComment, 1);
  }

  edit(newsId: number, commentId: number, comment: CommentEdit) {
    if (!this.comments[newsId]) {
      return null;
    }

    const indexComment = this.comments[newsId].findIndex(
      (comment) => comment.id === commentId,
    );

    if (indexComment === -1) {
      return null;
    }

    this.comments[newsId][indexComment] = {
      ...this.comments[newsId][indexComment],
      ...comment,
    };

    return this.comments[newsId][indexComment];
  }
}
