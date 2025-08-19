import { Injectable, Logger } from '@nestjs/common';
import { JuegoEnum, modifications, TipoEnum } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import MODS from './data/mods';

@Injectable()
export class ModificationService {
  private readonly logger = new Logger(ModificationService.name, {
    timestamp: true,
  });
  constructor(private readonly prisma: PrismaService) {}

  async createManyModificationsFromFile(): Promise<string> {
    try {
      const SET_MODS = new Set<Omit<modifications, 'id'>>();

      MODS.forEach((mod) => {
        SET_MODS.add({
          autor: mod.autor,
          descripcion: mod.descripcion,
          fecha_lanzamiento: mod.fecha_lanzamiento,
          juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
          portadaPath: mod.portadaPath,
          sinopsis: mod.sinopsis,
          tipo: TipoEnum.HISTORIA,
          traduccion: mod.traduccion,
          titulo: mod.titulo,
          aclaraciones: mod.aclaraciones ?? [],
          caracteristicas: mod.caracteristicas,
          enlaces: mod.enlaces,
          imagenesGaleria: mod.imagenesGaleria,
          isStandalone: mod.isStandalone,
          pasosInstalacion: mod.pasosInstalacion ?? [],
        });
      });

      await this.prisma.$runCommandRaw({
        insert: 'modifications',
        documents: [...SET_MODS],
      });

      return 'Creacion de insercion de mods completada!';
    } catch (error) {
      this.logger.error(
        { error },
        'Ocurrio un error al insertar multiples documentos en la coleccion',
      );
      return 'Fallo la insercion de multiples documentos';
    }
  }

  async getModifications(
    juego: JuegoEnum | undefined,
    tipo: TipoEnum | undefined,
  ) {
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

      return {
        data: results,
        count: results.length,
      };
    } catch (error) {
      this.logger.error(
        [error],
        'Ocurrio un error al obtener las modificaciones',
      );
    }
  }
}
