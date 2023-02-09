import { Delete } from '@mui/icons-material';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { News, NewsService } from './news.service';

@Controller('news')
export class NewsController {
   constructor(private readonly newsService: NewsService) {}

 @Get('/:id')
  get( @Param ( 'id') id: string ) : News {
  const idInt = parseInt(id);
     return this.newsService.find(idInt);
  }
@Post()
create (@Body() news: News): News {
   return this.newsService.create(news);
  }
@Delete ('/:id')
remove( @Param ( 'id') id: string ) : string {
    const idInt = parseInt(id);
    const isRemove = this.newsService.remove(idInt);
    return isRemove ? 'новость удалена' : 'эпередан не верный индефикатор';
   }
}
