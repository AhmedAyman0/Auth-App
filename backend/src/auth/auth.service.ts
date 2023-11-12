import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
    ) { }
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (!user) {
            throw new NotFoundException('could not find the user');
        }
        const isValidUser = await bcrypt.compare(password, user.password);
        if (user && isValidUser) {
            return {
                email: user.email,
            };
        }
    }

    async login(user: any) {
        const payload = { name: user.name, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
