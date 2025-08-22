import { Field, Int, ObjectType } from '@nestjs/graphql';

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
