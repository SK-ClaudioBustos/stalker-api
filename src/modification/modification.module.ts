import { Module } from '@nestjs/common';
import { ModificationService } from './modification.service';
import { ModificationController } from './modification.controller';

@Module({
  controllers: [ModificationController],
  providers: [ModificationService],
})
export class ModificationModule {}
