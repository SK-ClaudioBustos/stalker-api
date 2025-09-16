import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsEnum, IsMongoId } from 'class-validator';
import { JuegoEnum, TipoEnum } from 'generated/prisma';

@ObjectType()
export class ModificationsListOutput {
  @Field(() => [ModificationItemOutput])
  modifications: ModificationItemOutput[];

  @Field(() => Int)
  modificationsCount: number;
}

@ObjectType()
export class ModificationItemOutput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  titulo: string;

  @Field(() => String)
  portadaPath: string;
}

@ObjectType()
export class EnlaceMetadataData {
  @Field(() => String)
  url: string;
  @Field(() => String)
  texto: string;
}

@ObjectType()
export class ModificationData {
  @Field(() => ID)
  @IsMongoId()
  id: string;

  @Field(() => String)
  titulo: string;

  @Field(() => String)
  autor: string;

  @Field(() => String)
  sinopsis: string;

  @Field(() => TipoEnum)
  @IsEnum(TipoEnum)
  tipo: TipoEnum;

  @Field(() => JuegoEnum)
  @IsEnum(JuegoEnum)
  juego: JuegoEnum;

  @Field(() => String)
  traduccion: string;

  @Field(() => String)
  fecha_lanzamiento: string;

  @Field(() => String)
  descripcion: string;

  @Field(() => [String])
  caracteristicas: string[];

  @Field(() => [EnlaceMetadataData])
  enlaces: EnlaceMetadataData[];

  @Field(() => Boolean)
  isStandalone: boolean;

  @Field(() => [String])
  imagenesGaleria: string[];

  @Field(() => String)
  portadaPath: string;

  @Field(() => [String])
  aclaraciones: string[];

  @Field(() => [String])
  pasosInstalacion: string[];
}


@ObjectType()
export class NotificationContent {
  @Field(() => String)
  content: string;
}