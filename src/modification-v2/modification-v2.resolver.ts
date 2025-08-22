import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  ModificationData,
  ModificationsListOutput,
} from './dto/modification.types';
import {
  FindModificationById,
  FindModificationsParams,
} from './dto/modifications.input';
import { ModificationV2Service } from './modification-v2.service';

@Resolver()
export class ModificationV2Resolver {
  constructor(private readonly modificationService: ModificationV2Service) {}

  @Query(() => ModificationsListOutput)
  async getModifications(
    @Args('params', { type: () => FindModificationsParams })
    params: FindModificationsParams,
  ) {
    return this.modificationService.getModifications(params);
  }

  @Query(() => ModificationData)
  async getModification(
    @Args('args', { type: () => FindModificationById })
    args: FindModificationById,
  ) {
    return this.modificationService.getModification(args);
  }
}
