import { Controller, Post, Param, Body, Get, Delete, Put } from '@nestjs/common';
import { Comment, ComentsService, CommentEdit } from './coments.service';


@Controller('coments')
export class ComentsController {
  constructor(private readonly commentsService: ComentsService) { }
  @Post('/api/:idNews')
  create(@Param('idNews') idNews: string, @Body() comment: Comment) {
    const idNewsInt = parseInt(idNews);
    return this.commentsService.create(idNewsInt, comment);
  }
  @Put('/api/:idNews/:idComment')
  edit(
    @Param('idNews') idNews: string,
    @Param('idNews') idComment: string,
    @Body() comment: CommentEdit) {
    const idNewsInt = parseInt(idNews);
    const idCommentInt = parseInt(idComment);
    return this.commentsService.edit(idNewsInt, idCommentInt, comment);
  }
  @Get('/api/details/:idNews')
  get(@Param('idNews') idNews: string) {
    const idNewsInt = parseInt(idNews);
    return this.commentsService.find(idNewsInt);
  }
  @Delete('/api/details/:idNews/:idComment')
  remove(
    @Param('idNews') idNews: string,
    @Param('idComments') idComments: string,
  ) {
    const idNewsInt = parseInt(idNews);
    const idCommentsInt = parseInt(idComments);
    return this.commentsService.remove(idNewsInt, idCommentsInt);
  }
}
