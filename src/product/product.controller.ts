import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
//import { UserDto } from './dto';

@Controller('Product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }
}