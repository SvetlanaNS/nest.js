import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { ComentsService } from './coments/coments.service';
import { News, NewsEdit, NewsService } from './news.service';
import { renderNewsAll } from 'src/views/news/news-all';
import { renderTemplate } from 'src/views/template';
import { renderNewsDetail } from 'src/views/news/news-detail';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService,
    private readonly commentsService: ComentsService,
  ) { }

  @Get('/api/detail/:id')
  get(@Param('id') id: string): News {
    const idInt = parseInt(id);
    const news = this.newsService.find(idInt);
    const comments = this.commentsService.find(idInt)
    return {
      ...news, comment,
    };
  }

  @Get('api/all')
  getAll(): News[] {
    const news = this.newsService.getAll();
    return news;
  }
  @Get('/all')
  getAllView() {
    const news = this.newsService.getAll();
    const content = renderNewsAll(news);
    return renderTemplate(content, seo: {
      title: 'Список новостей',
      description: 'Самые крутые новости на свете!',
    });
  }
  @Get('/detail/:id')
  getDetailViev(@Param('id') id: string) {
    const InInt = parseInt(id);
    const news = this.commentsService.find(InInt);
  }
  const content = renderNewsDetail(news);
    return renderTemplate(content, {
    title: news.title,
    discription: news.discription,
  });
  }
@Post('/api')
create(@Body() news: News): News {
  return this.newsService.create(news);
}
@Put('/api/:id')
edit(@Param('id') id: string,
   @Body() news: NewsEdit): News {
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
