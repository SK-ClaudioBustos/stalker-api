import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JuegoEnum, TipoEnum } from 'generated/prisma';
import { ModificationService } from './modification.service';

@Controller('modifications')
@ApiTags('modifications')
export class ModificationController {
  constructor(private readonly modificationService: ModificationService) {}

  @Get()
  async getModifications(
    @Query('juego') juego?: JuegoEnum,
    @Query('tipo') tipo?: TipoEnum,
  ) {
    return this.modificationService.getModifications(juego, tipo);
  }

  @Get(':id')
  async getModification(@Param('id') id: string) {
    return this.modificationService.getModification(id);
  }

  @Get('createFromFile')
  async createManyModificationsFromFile() {
    return this.modificationService.createManyModificationsFromFile();
  }
}
