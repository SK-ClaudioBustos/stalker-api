import { Module } from '@nestjs/common';
import { PubsubService } from './pubusb.service';

@Module({
  providers: [PubsubService],
  exports: [PubsubService],
})
export class PubsubModule {}
