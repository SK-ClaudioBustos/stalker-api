import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ModificationV2Service } from './modification-v2.service';

@Module({
  imports: [PrismaModule],
  providers: [ModificationV2Service],
})
export class ModificationV2Module {}
