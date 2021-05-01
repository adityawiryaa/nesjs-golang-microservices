import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./application/module/app.module";
import { ServerConfig } from './infrastructure/config/server-config';
import { Logger } from '@nestjs/common';

async function bootstrap () {

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            noAck: false,
            urls: [ServerConfig.RABBITMQ_URL],
            queue: 'service_rabbitmq_queue',
            queueOptions: {
                durable: false
            },
            prefetchCount: 1,
         },
    });

    app.listen(() => {
        Logger.log('Rabbitmq Microservice listening...');
    });
}

bootstrap();