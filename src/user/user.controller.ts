import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Post('createUser')
    createUser(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto);
    }
}
  