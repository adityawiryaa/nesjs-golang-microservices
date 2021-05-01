import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServerConfig } from 'apps/api/src/infrastructure/config/server-config';
import { ProductController } from '../../controller/product/product.controller';
import { ProductService } from '../../service/product/product.service';

@Module({
    imports : [
        ClientsModule.register([
            {
                name : 'PRODUCT_SERVICE',
                transport : Transport.RMQ,
                options : {
                    urls : [ServerConfig.RABBITMQ_URL],
                    queue : 'service_rabbitmq_queue',
                    queueOptions: {
                        durable: false
                      }, 
                },
            },
        ]),
    ],
    controllers : [ProductController],
    providers : [ProductService],
})

export class ProductModule { }