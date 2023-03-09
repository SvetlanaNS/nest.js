import { Controller, Post, Param, Body, Get, Delete } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { Comment } from './coments.service';

@Controller('coments')
export class ComentsController {
  constructor(private readonly commentsService: ComentsService) {}
  @Post('/:idNews')
  create(@Param('idNews') idNews: string, @Body() comment: Comment) {
    const idNewsInt = parseInt(idNews);
    return this.commentsService.create(idNewsInt, comment);
  }
  @Get('/details/:idNews')
  get(@Param('idNews') idNews: string) {
    const idNewsInt = parseInt(idNews);
    return this.commentsService.find(idNewsInt);
  }
  @Delete('/details/:idNews/:idComments')
  remove(
    @Param('idNews') idNews: string,
    @Param('idComments') idComments: string,
  ) {
    const idCommentsInt = parseInt(idComments);
    return this.commentsService.find(idNewsInt);
  }
}
