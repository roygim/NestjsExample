const { productsDB } = require('../../db');
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
const axios = require('axios').default;
const { API_URL_PRODUCT_DETAILS } = require('../constants');
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductService {
  constructor(private readonly config: ConfigService) {}

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
      if(typeof error.response !== "undefined"
        && typeof error.response.data !== "undefined"
        && typeof error.response.data.errors !== "undefined") {
          const data = error.response.data.errors;
          throw new HttpException({message: 'error', data}, HttpStatus.BAD_REQUEST);
      }
    }
  }

  async addProductToCart(productId: number, userId: string) {
    try {
      const token = this.config.get('USER_TOKEN');

      const currentCartRequest = {
        method: 'GET',
        url: `https://occ.demo.seidor.digital/occ/v2/electronics/users/${userId}/carts/current`,
        headers: {"Authorization" : `Bearer ${token}`}
      }
    
      const { data: cartResponse } = await axios(currentCartRequest);

      if(cartResponse.code) {
        const addProductToCartRequest = {
          method: 'POST',
          url: `https://occ.demo.seidor.digital/occ/v2/electronics/users/${userId}/carts/${cartResponse.code}/entries`,
          headers: {"Authorization" : `Bearer ${token}`},
          data: {
            "product": { "code": `"${productId}"` }
          }
        }

        const { data: productResponse } = await axios(addProductToCartRequest);

        return productResponse;
      }
    } catch (error) {
      if(typeof error.response !== "undefined"
        && typeof error.response.data !== "undefined"
        && typeof error.response.data.errors !== "undefined") {
          const data = error.response.data.errors;
          throw new HttpException({message: 'error', data}, HttpStatus.BAD_REQUEST);
      }
    }





    /*try {
      const currentCartUrl = `https://occ.demo.seidor.digital/occ/v2/electronics/users/${userId}/carts/current`
      const token = this.config.get('USER_TOKEN')
    
      const { data: response } = await axios({
        method: 'GET',
        url: currentCartUrl,
        headers: {"Authorization" : `Bearer ${token}`}
      });

      if(response.code) {
        const addProductToCartUrl = `https://occ.demo.seidor.digital/occ/v2/electronics/users/${userId}/carts/${response.code}/entries`    
      }

      return response;
    } catch (error) {
      if(typeof error.response !== "undefined"
        && typeof error.response.data !== "undefined"
        && typeof error.response.data.errors !== "undefined") {
          const data = error.response.data.errors;
          throw new HttpException({message: 'error', data}, HttpStatus.BAD_REQUEST);
      }
    }*/
  }
}
