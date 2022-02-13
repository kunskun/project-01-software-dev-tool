import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyResolver } from './family.resolver';

@Module({
  providers: [FamilyService, FamilyResolver]
})
export class FamilyModule {}
