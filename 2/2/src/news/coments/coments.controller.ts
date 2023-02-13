import { Delete } from '@mui/icons-material';
import { Controller } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { Coment } from './coments.service';

@Controller('coments')
export class ComentsController {
  constructor(private readonly comentsService: ComentsService) {}

  @Post('/:idNews')
  create(@Param('idNews') idNews: string, @Bady() comment: Comment) {
    const idNewsInt = parseInt(idNews);
    this.comentsService.create(idNewsInt, comment);
  }
  @Get('/detail/:idNews')
  get(@Param('idNews') idNews: string) {
    const idNewsInt = parseInt(idNews);
    return this.comentsService.find(idNewsInt);
  }
  @Delete('/detail/:idNews/:idСoments')
  remove(
    @Param('idNews') idNews: string,
    @Param('idComents') idComents: string,
  ) {
    const idNewsInt = parseInt(idNews);
    const idComentInt = parseInt(idComents);
    return this.comentsService.remove(idNewsInt, idComentInt);
  }
}
