import { Injectable } from '@nestjs/common';

export interface News {
    id?:number;
    title:string;
    discription:string;
    autor:string;
    countView:number;
}

function getRandomInt(min:number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}
@Injectable()
export class NewsService {
    private readonly news : News [] = [
{
    id: 1,
    title: 'Наша первая новость',
     discription: 'урааа наша первая новость',
     autor: 'Владислав',
     countView: 12,
},
    ];
    create(news: News) :News {
       const id= getRandomInt(0,9999);
       const finallnews = {
        ...news,
        id: id,
    };

    this.news.push(finallnews);
    return finallnews;
    }


    find(id:News['id']):News | undefined {
       return this.news.find((news:News)=>news.id===id);
    }
    remove(id:News['id']) : Boolean {
      const indexRemoveNews = this.news.findIndex((news:News)=>news.id===id);
     if (indexRemoveNews !== -1) {
     this.news.splice(indexRemoveNews, 1);
      return true;
     }
      return false;
    }
}
