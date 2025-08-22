import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { JuegoEnum, TipoEnum } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { ModificationsListOutput } from './dto/modification.types';
import { FindModificationsParams } from './dto/modifications.input';

@Injectable()
export class ModificationV2Service {
  private readonly logger = new Logger(ModificationV2Service.name, {
    timestamp: true,
  });
  constructor(private readonly prisma: PrismaService) {}

  async getModifications(
    params: FindModificationsParams,
  ): Promise<ModificationsListOutput> {
    const { juego, tipo } = params;
    const validJuegoValues = Object.values(JuegoEnum);
    const validTipoValues = Object.values(TipoEnum);

    if (!validJuegoValues.includes(juego) || !validTipoValues.includes(tipo)) {
      throw new BadRequestException('Valores inválidos para juego o tipo');
    }
    
    try {
      this.logger.verbose({
        operacion: 'getModifications',
        variables: {
          tipo,
          juego,
        },
      });
      const results = await this.prisma.modifications.findMany({
        where: {
          tipo,
          juego,
        },
        select: {
          id: true,
          titulo: true,
          portadaPath: true,
        },
      });
      const response: ModificationsListOutput = {
        modificationsCount: results.length,
        modifications: results,
      };

      return response;
    } catch (error) {
      this.logger.error(
        `Error al obtener las modificaciones: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error al obtener las modificaciones',
      );
    }
  }
}
