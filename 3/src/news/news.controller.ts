import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { News, NewsEdit } from './news.interface';
import { CreateNewsDto } from './dto/create.news.dto';
import { renderTemplate } from '../view/template';
import { renderNewsAll } from '../view/news/news-all';
import { renderNewsDetail } from '../view/news/news-detail';
import { CommentsService } from './comments/comments.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { HelperFileLoad } from '../utils/HelperFileLoad';

const PATH_NEWS = '/static/';
HelperFileLoad.path = PATH_NEWS;

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private readonly commentsService: CommentsService,
  ) {}
  @Get()
  getNewsAll() {
    return this.newsService.getAllNews();
  }

  @Get('view')
  getAllView() {
    const news = this.newsService.getAllNews();

    const content = renderNewsAll(news);
    return renderTemplate(content, {
      title: 'список новостей',
      description: 'Самые крутые новости',
    });
  }

  @Get('view/:id')
  getDetailView(@Param('id') newsId: number) {
    const news = this.newsService.find(newsId);
    const comments = this.commentsService.find(newsId);

    if (typeof news === 'string') {
      return 'Новость не найдена';
    }

    const content = renderNewsDetail(news, comments);
    return renderTemplate(content, {
      title: news.title,
      description: news.description,
    });
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.newsService.find(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('cover', {
      storage: diskStorage({
        destination: HelperFileLoad.destinationPath,
        filename: HelperFileLoad.customFileName,
      }),
    }),
  )
  create(
    @Body() news: CreateNewsDto,
    @UploadedFile() cover: Express.Multer.File,
  ) {
    if (cover?.filename) {
      news.cover = PATH_NEWS + cover.filename;
    }

    return this.newsService.create(news);
  }

  @Patch(':id')
  edit(@Param('id') id: number, @Body() newsEdit: NewsEdit) {
    return this.newsService.edit(id, newsEdit);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.newsService.remove(id);
  }
}
