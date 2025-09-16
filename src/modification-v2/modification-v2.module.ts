import { Module } from '@nestjs/common';
import { PubsubModule } from 'src/common/pubsub/pubsub.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ModificationV2Service } from './modification-v2.service';
import { ModificationV2Resolver } from './modification-v2.resolver';

@Module({
  imports: [PrismaModule, PubsubModule],
  providers: [ModificationV2Resolver, ModificationV2Service],
})
export class ModificationV2Module {}
