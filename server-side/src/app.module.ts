import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { FamilyModule } from './family/family.module';

@Module({
  imports: [MemberModule, FamilyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
