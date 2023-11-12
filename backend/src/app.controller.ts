import { UsersService } from './users/users.service';
import { Controller, Get } from '@nestjs/common';
import { User } from './users/schemas/user.schema';

@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) { }


}
