import { InputType, Field } from '@nestjs/graphql';
import { ServiceType } from '../../service/entities/service.entity';

@InputType()
export class CreateFamilyInput {
  @Field()
  readonly familyName: string

  @Field()
  readonly familyCode: string

  readonly service: ServiceType
}
