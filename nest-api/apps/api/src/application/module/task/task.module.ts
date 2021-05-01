import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServerConfig } from 'apps/api/src/infrastructure/config/server-config';
import * as path from 'path';
import { TaskController } from '../../controller/task/task.controller';
import { TaskService } from '../../service/task/task.service';

@Module({
    imports : [
        ClientsModule.register([
            {
                name : 'TASK_SERVICE',
                transport : Transport.GRPC,
                options : {
                    package : 'task',
                    protoPath: path.join(__dirname,'infrastructure/proto/task.proto'),
                    url : ServerConfig.GRPC_URL,
                },
            },
        ]),
    ],
    controllers : [TaskController],
    providers : [TaskService],
})

export class TaskModule { }