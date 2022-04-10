const { usersDB } = require('../../db');

import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

const users: UserDto [] = usersDB;

@Injectable()
export class UserService {
  async getAllUsers() {
    const retVal = usersDB.filter(item => delete item.password);
    return usersDB;
  }

  async addUser(dto: UserDto) {
    users.push(dto);
    delete dto.password;
    return dto;
  }
}
