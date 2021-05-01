import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "apps/api/src/core/dto/user.dto";
import { UserInterface } from "apps/api/src/core/interface/user.interface";
import { UserService } from "../../service/user/user.service";

@Controller('user')
export class UserController {
    constructor (private readonly userService : UserService) {}

    @Post('create')
    async createUser(@Body() payload : UserDto ) : Promise<UserInterface> {
        return await this.userService.createUser(payload);
    };
    
}