import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ModificationV2Module } from './modification-v2/modification-v2.module';
import { ModificationV2Resolver } from './modification-v2/modification-v2.resolver';
import { ModificationV2Service } from './modification-v2/modification-v2.service';
import { ModificationModule } from './modification/modification.module';
import { PrismaModule } from './prisma/prisma.module';
import { join } from 'path';

@Module({
  imports: [
    ModificationModule,
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      graphiql: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ModificationV2Module,
  ],
  controllers: [],
  providers: [ModificationV2Resolver, ModificationV2Service],
})
export class AppModule {}
