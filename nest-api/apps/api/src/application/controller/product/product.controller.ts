import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductDto } from 'apps/api/src/core/dto/product.dto';
import { ProductInterface } from 'apps/api/src/core/interface/product.interface';
import { ProductService } from '../../service/product/product.service';

@Controller('product')

export class ProductController {

    constructor( private  productService : ProductService ) {}

    @Post('create')
    async createProduct (@Body() productDto : ProductDto ) : Promise<ProductInterface> {
        return await this.productService.createProduct(productDto);
    }
    
}