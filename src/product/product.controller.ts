import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
//import { UserDto } from './dto';

@Controller('Product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProduct(id);
    }

    @Post(':id')
    addProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProduct(id);
    }
}