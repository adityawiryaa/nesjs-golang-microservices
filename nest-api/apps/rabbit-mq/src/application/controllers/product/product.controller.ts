import { Controller } from '@nestjs/common';
import { ProductService } from '../../service/product/product.service';
import { ProductDto } from '../../../core/dto/product.dto';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { Product } from 'apps/rabbit-mq/src/core/entity/product/product.entity';

@Controller()
export class ProductController {
    constructor(private readonly productService : ProductService ) {}

    @MessagePattern({ cmd : 'create', role : 'rabbit-mq-product' })
    async createProduct(@Payload() payload : ProductDto, @Ctx() context: RmqContext) : Promise<Product> {
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        channel.ack(originalMsg);
        return await this.productService.createProduct(payload);
    }}