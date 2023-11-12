import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get('')
    async getUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post('')
    async createUser(@Body() user: User): Promise<any> {
        try {
            if (!user) {
                throw new BadRequestException("no data provided")
            } else if (!user.name || !user.password || !user.email) {
                throw new BadRequestException("Required data not provided")

            }
            const result = await this.userService.insertUser(user);
            return {
                msg: 'User successfully registered',
                userId: result.id,
                userName: result.name,
            };
        } catch (error) {
            if (error.code === 11000) {
                console.error('Email already exists');
                throw new BadRequestException("Email already exists")
            } else {
                console.error('An error occurred:', error);
                throw new InternalServerErrorException(error)

            }
        }
    }
}
