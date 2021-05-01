import { Module } from '@nestjs/common';
import { UserControlller } from '../../controller/user/user.controller';
import { UserService } from '../../service/user/user.service';

@Module({
    imports : [],
    controllers : [UserControlller],
    providers : [UserService],
})

export class UserModule { }