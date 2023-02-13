import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ComentsService } from './coments/coments.service';
import { News, NewsEdit, NewsService } from './news.service';
import { renderNewsAll } from 'src/views/news/news-all';
import { renderTemplate } from 'src/views/template';
@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly commentsService: ComentsService,
  ) {}

  @Get('/api/detail/:id')
  get(@Param('id') id: string): News {
    const idInt = parseInt(id);
    const news = this.newsService.find(idInt);
    const coments = this.commentsService.find(idInt);
    return {
      ...news,
    };
  }

  @Get('/api/all')
  getAll(): News[] {...}
    

  @Get('/all')
  getAllViev() {

    const news = this.newsService.getAll();
    const coutent= renderNewsAll(news);
    return renderTemplate(coutent);
  }
  @Post('/api/detail/:idNews/:idComment')
  create(@Body() news: News): News {
    return this.newsService.create(news);
  }
  @Put('/api/:id')
  edit(@Param('id') id: string, @Body() news: NewsEdit): News {
    const idInt = parseInt(id);
    return this.newsService.edit(idInt, news);
  }
  @Delete('/api/:id')
  remove(@Param('id') id: string): string {
    const idInt = parseInt(id);
    const isRemoved = this.newsService.remove(idInt);
    return isRemoved ? 'новость удалена' : 'передан не верный индефикатор';
  }
}
