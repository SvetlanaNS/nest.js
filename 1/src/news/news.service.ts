import { Injectable } from '@nestjs/common';

export interface News {
  id?: number;
  title: string;
  discription: string;
  autor: string;
  countView: number;
}

export interface NewsEdit {
  title?: string;
  discription?: string;
  autor?: string;
  countView?: number;
}
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
@Injectable()
export class NewsService {
  private readonly news: News[] = [
    {
      id: 1,
      title: 'Наша первая новость',
      discription: 'урааа наша первая новость',
      autor: 'Владислав',
      countView: 12,
    },
  ];
  create(news: News): News {
    const id = getRandomInt(0, 9999);
    const finalnews = {
      ...news,
      id: id,
    };

    this.news.push(finalnews);
    return finalnews;
  }

  find(id: News['id']): News | undefined {
    return this.news.find((news) => news.id === id);
  }
  getAll(): News[] {
    return this.news;
  }

  edit(id: number, news: NewsEdit): News | undefined {
    const indexEditTableNews = this.news.findIndex((news) => news.id === id);
    if (indexEditTableNews !== -1) {
      this.news[indexEditTableNews] = {
        ...this.news[indexEditTableNews],
        ...news,
      };
      return this.news[indexEditTableNews];
    }
    return undefined;
  }
  remove(id: News['id']): boolean {
    const indexRemoveNews = this.news.findIndex((news: News) => news.id === id);
    if (indexRemoveNews !== -1) {
      this.news.splice(indexRemoveNews, 1);
      return true;
    }
    return false;
  }
}
function edit(id: any, arg1: any) {
  throw new Error('Function not implemented.');
}
