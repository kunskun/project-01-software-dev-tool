import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyService } from './family.service';
import { FamilyType } from './entities/family.entity';
import { CreateFamilyInput } from './dto/create-family.input';

@Resolver(() => FamilyType)
export class FamilyResolver {

  constructor(private readonly familyService: FamilyService) { }

  @Mutation(() => FamilyType)
  createFamily(@Args('createFamilyInput') createFamilyInput: CreateFamilyInput) {
    return this.familyService.create(createFamilyInput);
  }

  @Query(() => [FamilyType], { name: 'family' })
  async findAll(): Promise<FamilyType[]> {
    return this.familyService.findAll();
  }

  @Query(() => FamilyType, { name: 'family' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.familyService.findOne(id);
  }

  @Mutation(() => FamilyType)
  removeFamily(@Args('id', { type: () => Int }) id: number) {
    return this.familyService.remove(id);
  }
}
