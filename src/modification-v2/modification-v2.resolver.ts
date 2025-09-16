import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubsubService } from 'src/common/pubsub/pubusb.service';
import {
  ModificationData,
  ModificationsListOutput,
  NotificationContent,
} from './dto/modification.types';
import {
  FindModificationById,
  FindModificationsParams,
} from './dto/modifications.input';
import { ModificationV2Service } from './modification-v2.service';

@Resolver()
export class ModificationV2Resolver {
  constructor(
    private readonly modificationService: ModificationV2Service,
    private readonly pubsub: PubsubService,
  ) {}

  @Query(() => ModificationsListOutput)
  async getModifications(
    @Args('params', { type: () => FindModificationsParams })
    params: FindModificationsParams,
  ) {
    const modifications = this.modificationService.getModifications(params);
    return modifications;
  }

  @Query(() => ModificationData)
  async getModification(
    @Args('args', { type: () => FindModificationById })
    args: FindModificationById,
  ) {
    return this.modificationService.getModification(args);
  }

  @Subscription(() => NotificationContent, {
    name: 'notification',
  })
  suscribeToNotification() {
    return this.pubsub.asyncIterableIterator('notification');
  }
}
