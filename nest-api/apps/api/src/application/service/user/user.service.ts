import { Injectable, Inject, BadRequestException, Res } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserInterface } from 'apps/api/src/core/interface/user.interface';
import { UserDto } from '../../../core/dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_SERVICE')
        private readonly client : ClientKafka
    ) {};

    onModuleInit(){
        this.client.subscribeToResponseOf('user.create');
    };

    async createUser(payload : UserDto) : Promise<UserInterface> {

        return await this.client.send('user.create', payload).toPromise()
        .then(res => {
            return res.data;
        });
    }

}