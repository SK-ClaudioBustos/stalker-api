import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { IsBoolean, IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { JuegoEnum, TipoEnum } from 'generated/prisma';

registerEnumType(JuegoEnum, {
  name: 'Juego',
  description: 'Juego al que pertenece la modificación',
});

registerEnumType(TipoEnum, {
  name: 'TipoEnum',
  description: 'Tipos de juego soportados',
});

@InputType()
export class FindModificationsParams {
  @Field(() => JuegoEnum)
  @IsEnum(JuegoEnum)
  juego: JuegoEnum;

  @Field(() => TipoEnum)
  @IsEnum(TipoEnum)
  tipo: TipoEnum;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isStandalone?: boolean;
}

@InputType()
export class FindModificationById {
  @Field(() => ID)
  @IsMongoId()
  id: string;
}
