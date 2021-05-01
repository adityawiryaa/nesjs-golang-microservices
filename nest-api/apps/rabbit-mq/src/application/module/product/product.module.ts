import { Module } from '@nestjs/common';
import { ProductController } from '../../controllers/product/product.controller';
import { ProductService } from '../../service/product/product.service';
@Module({
    imports : [],
    controllers : [ProductController],
    providers : [ProductService]
})

export class ProductModule { }