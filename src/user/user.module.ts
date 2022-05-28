import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommonService } from 'src/common/common.service';
import { CommonModule } from 'src/common/common.module';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  imports: [CommonModule, RepositoriesModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}