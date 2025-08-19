import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      this.logger.debug('Inicializando cliente de prisma');
      await this.$connect();
      this.logger.debug('Servicio de Prisma conectado');
    } catch (error) {
      this.logger.error([{ error }], 'Fallo la conexion a la BD');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.debug('Servicio de Prisma desconectado');
  }
}
