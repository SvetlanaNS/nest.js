import { Injectable } from '@nestjs/common';
import { getRandomInt, News } from '../news.service';

export type Coment = {
  id?: number;
  message: string;
  autor: string;
};

@Injectable()
export class ComentsService {
  private readonly comments = {};
 
    
  
  create(idNews: number, comment: Comment) {
    // eslint-disable-next-line prettier/prettier
    if (this.comments[idNews] ) {
      this.comments[idNews] = [];
    }

    this.comments[idNews].push({...comment,id:getRandomInt() });
    return comment"Коментарий был создан;
  }
  find(idNews: number):Coment[]|null {
    return this.coments[idNews] || null ;
}
remove(idNews: number,idComent:number):Coment[[]]|null {
 if (!this.comments[idNews]){
  return null;
 }
 const indexComents=this.comments[idNews].findIndex((c)=>
 c.id===idComment,);
 this.comments.id===idComent);
 if (indexComents===-1){
  return null;
 }
 return this.coments[idNews][indexComents].splice(indexComents,1) ;
}
}