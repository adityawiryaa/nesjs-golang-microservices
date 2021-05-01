import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { UserInterface } from "apps/kafka/src/core/interface/user.interface";
import { UserService } from '../../service/user/user.service';

@Controller()
export class UserControlller {
    constructor(private userService : UserService) {}

    @MessagePattern('user.create')
    async createUser(@Payload() payload ) : Promise<any> {
        const data = await this.userService.createUser(payload.value);
        return { data : data }
    }

}