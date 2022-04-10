import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

const users: UserDto [] = [{ email: 'aaa@gmail.com', password: 'aaa'}]

@Injectable()
export class UserService {
  async getAllUsers() {
    const retVal = users.filter(item => delete item.password);
    return retVal;
  }

  async addUser(dto: UserDto) {
    users.push(dto);
    delete dto.password;
    return dto;
  }
}
