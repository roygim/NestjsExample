import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto';

@Controller('users')
export class UserController {
constructor(private userService: UserService) {}

@Get()
getAllUsers() {
    return this.userService.getAllUsers();
}

@Post('addUser')
addUser(@Body() dto: UserDto) {
    return this.userService.addUser(dto);
}
}
  