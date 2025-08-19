import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ModificationController } from './modification.controller';
import { ModificationService } from './modification.service';

@Module({
  imports: [PrismaModule],
  controllers: [ModificationController],
  providers: [ModificationService],
})
export class ModificationModule {}
