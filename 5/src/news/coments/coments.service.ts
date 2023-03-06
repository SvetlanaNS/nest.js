import { Injectable } from '@nestjs/common';
import { News, getRandomInt } from '../news.service';
export type Comment = {
  id?: number;
  message: string;
  autor: string;
  idNews: number;
};

@Injectable()
export class ComentsService {
  private readonly comments = {};
  create(idNews: number, comment: Comment) {
    if (this.comments[idNews]) {
      this.comments[idNews] = [];
    }
    this.comments[idNews].push({ ...comment, id: getRandomInt() });
    return 'Коментарий был создан';
  }
  find(idNews: number): Comment[] | undefined {
    return this.comments[idNews] || undefined;
  }
}
