const { usersDB } = require('../../db');
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';
import { v4 as uuidv4 } from 'uuid';
const find = require('lodash.find');
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class UserService {
  async getAllUsers() {
    const retVal = usersDB.filter(item => delete item.password);
    return retVal;
  }

  async createUser(dto: UserDto) {
    if(find(usersDB, ['email', dto.email])) {
      const errors = { message: 'email must be unique.' };
      throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);
    } else {
      dto.id = uuidv4();
      usersDB.push(dto);
      delete dto.password;
      return dto;
    }   
  }
}
