import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { JuegoEnum, TipoEnum } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  ModificationData,
  ModificationsListOutput,
} from './dto/modification.types';
import {
  FindModificationById,
  FindModificationsParams,
} from './dto/modifications.input';
import { ObjectId } from 'mongodb';

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

  async getModification(args: FindModificationById) {
    const { id } = args;
    try {
      if (!ObjectId.isValid(id)) {
        throw new BadRequestException('El ID proporcionado no es valido');
      }

      const modification: ModificationData | null =
        await this.prisma.modifications.findUnique({
          where: { id },
        });

      if (!modification) {
        this.logger.warn(
          'No se encontro la modificacion con el id proporcionado',
        );
        throw new NotFoundException(`Modificación con ID ${id} no encontrada`);
      }
      return modification;
    } catch (error) {
      this.logger.error(
        [error, id],
        'Ocurrio un error al obtener la modificacion',
      );
      throw new InternalServerErrorException(
        `No se pudo recuperar la modificacion ${error.message}`,
      );
    }
  }
}
