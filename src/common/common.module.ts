import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { UsersApiService } from 'src/core/services/mysql/users.api';

@Global()
@Module({
  providers: [
    CommonService,
    {
      provide: "IUsers",
      useClass: UsersApiService
    }
  ],
  exports: [
    CommonService, 
    {
      provide: "IUsers",
      useClass: UsersApiService
    }
  ]
})
export class CommonModule { }