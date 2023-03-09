import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { ComentsModule } from './coments/coments.module';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [ComentsModule],
})
export class NewsModule {}
