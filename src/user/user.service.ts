const { usersDB } = require('../../db');
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { v4 as uuidv4 } from 'uuid';
const find = require('lodash.find');
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { IUsers } from 'src/core/interfaces/IUsers';
import { IUsersToken } from 'src/core/interfaces/tokens';

@Injectable()
export class UserService {
  constructor(private commonService: CommonService, @Inject(IUsersToken) private usersApiService: IUsers) {} 
  
  async getAllUsers() {
    return this.usersApiService.getUsers();
  }

  async createUser(dto: CreateUserDto) {
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
