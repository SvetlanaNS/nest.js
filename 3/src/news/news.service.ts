import { Injectable } from '@nestjs/common';
import { AllNews, News, NewsEdit } from './news.interface';
import { getRandomInt } from '../utils/getRandom';

@Injectable()
export class NewsService {
  private readonly news: AllNews = {
    1: {
      id: 1,
      title: 'Наша первая новость',
      description: 'Урраааа, наша первая новсть!',
      author: 'Владислав',
      countView: 12,
      cover: 'https://bugaga.ru/uploads/posts/2015-04/1429080418_tanki-2.jpg',
    },
  };

  getAllNews(): AllNews {
    return this.news;
  }

  find(id: number): News | string {
    if (this.news[id]) {
      return this.news[id];
    }

    return 'Новость не найдена';
  }

  create(news: News): News {
    const id = getRandomInt(0, 1000000);
    news.id = id;
    this.news[id] = news;

    return this.news[id];
  }

  remove(id: number): boolean {
    if (this.news[id]) {
      delete this.news[id];
      return true;
    }

    return false;
  }

  edit(id: number, newsEdit: NewsEdit): News | string {
    if (this.news[id]) {
      this.news[id] = {
        ...this.news[id],
        ...newsEdit,
      };

      return this.news[id];
    }

    return 'Новость не найдена';
  }
}
