import { Module } from '@nestjs/common';
import { IUsersToken } from 'src/core/interfaces/tokens';
import { UsersApiService } from 'src/core/services/mysql/users.api';

@Module({
  providers: [
    {
      provide: IUsersToken,
      useClass: UsersApiService
    }
  ],
  exports: [
    {
      provide: IUsersToken,
      useClass: UsersApiService
    }
  ]
})
export class RepositoriesModule {}
