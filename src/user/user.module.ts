import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommonService } from 'src/common/common.service';

@Module({
  imports: [CommonService],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}