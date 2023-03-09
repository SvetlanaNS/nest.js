import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment, CommentEdit } from './comments.interface';

@Controller(':newsId')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Get()
  get(@Param('newsId') newsId: number) {
    return this.commentService.find(newsId);
  }

  @Post()
  create(@Param('newsId') newsId: number, @Body() comment: Comment) {
    return this.commentService.create(newsId, comment);
  }

  @Delete()
  remove(
    @Param('newsId') newsId: number,
    @Param('commentId') commentId: number,
  ) {
    return this.commentService.remove(newsId, commentId);
  }

  @Patch()
  edit(
    @Param('newsId') newsId: number,
    @Param('commentId') commentId: number,
    @Body() editCommnt: CommentEdit,
  ) {
    return this.commentService.edit(newsId, commentId, editCommnt);
  }
}
