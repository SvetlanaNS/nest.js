import { Module } from '@nestjs/common';
import { ComentsController } from './coments.controller';
import { ComentsService } from './coments.service';

@Module({
  controllers: [ComentsController],
  providers: [ComentsService],
  exports: [ComentsService],
})
export class ComentsModule {}
