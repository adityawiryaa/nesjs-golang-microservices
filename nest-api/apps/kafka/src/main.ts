import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger } from '@nestjs/common';
import { AppModule } from "./application/module/app.module";
import { ServerConfig } from './infrastructure/config/server-config';

async function bootstrap () {

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.KAFKA,
        options: {
            client : {
                brokers : [ServerConfig.KAFKA_URL],
            }
         },
    });

    app.listen(() => {
        Logger.log('Kafka Microservice listening...');
    });
}

bootstrap();