import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';

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

    @Post()
    addProduct(@Body('productId', ParseIntPipe) productId: number, @Body('userId') userId: string) {
        return this.productService.addProduct(productId, userId);
    }
}