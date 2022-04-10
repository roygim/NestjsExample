const { productsDB } = require('../../db');
import { Injectable } from '@nestjs/common';
//import { UserDto } from './dto';

@Injectable()
export class ProductService {
  async getAllProducts() {
    return productsDB;
  }
}
