import { Module } from '@nestjs/common';
import { ModificationModule } from './modification/modification.module';

@Module({
  imports: [ModificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
