import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
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

const pubSub = new PubSub();

@Resolver()
export class ModificationV2Resolver {
  constructor(private readonly modificationService: ModificationV2Service) {}

  @Query(() => ModificationsListOutput)
  async getModifications(
    @Args('params', { type: () => FindModificationsParams })
    params: FindModificationsParams,
  ) {
    const modifications = this.modificationService.getModifications(params);
    await pubSub.publish('notification', {
      notification: {
        content: 'Obteniendo modificaciones...',
      },
    });
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
    return pubSub.asyncIterableIterator('notification');
  }
}
