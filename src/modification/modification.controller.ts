import { Controller, Get } from '@nestjs/common';
import { ModificationService } from './modification.service';

@Controller('modification')
export class ModificationController {
  constructor(private readonly modificationService: ModificationService) {}

  @Get()
  getModifications() {
    return this.modificationService.getModifications();
  }
}
