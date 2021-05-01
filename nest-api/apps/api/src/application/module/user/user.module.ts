import { Module } from '@nestjs/common';
import { UserController } from '../../controller/user/user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { ServerConfig } from 'apps/api/src/infrastructure/config/server-config';
import { UserService } from '../../service/user/user.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ClientsModule.register([
            {
                name : 'USER_SERVICE',
                transport: Transport.KAFKA,
                options : {
                    client : {
                        clientId : 'user',
                        brokers : [ServerConfig.KAFKA_URL]
                    },
                    consumer : {
                        groupId : 'user-consumer'
                    },
                },
            },
        ]),
    ],
    controllers : [UserController],
    providers : [UserService]
})
export class UserModule { }