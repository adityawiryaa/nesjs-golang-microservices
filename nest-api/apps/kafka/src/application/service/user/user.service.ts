import { Injectable } from "@nestjs/common";
import { UserDto } from 'apps/kafka/src/core/dto/user.dto';
import { User } from "apps/kafka/src/core/entity/user.entity";
import { UserInterface } from "apps/kafka/src/core/interface/user.interface";

@Injectable()
export class UserService {
    constructor() {}

    async createUser( payload : UserDto ) : Promise<UserInterface> {
        const user = new User();
        user.email = payload.email;
        user.password = payload.password;
        return user;
    };

}