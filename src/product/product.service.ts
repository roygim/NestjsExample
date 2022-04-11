const { productsDB } = require('../../db');
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
const axios = require('axios').default;
const { API_URL_PRODUCT_DETAILS } = require('../constants');

@Injectable()
export class ProductService {
  async getAllProducts() {
    return productsDB;
  }

  async getProduct(id: number) {
    try {
      const { data: response } = await axios({
        method: 'GET',
        url: `${API_URL_PRODUCT_DETAILS}${id}`,
      });
      return response;
    } catch (error) {
      let data = [];
      if(typeof error.response !== "undefined"
        && typeof error.response.data !== "undefined"
        && typeof error.response.data.errors !== "undefined") {
          data = error.response.data.errors;
          throw new HttpException({message: 'error', data}, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
