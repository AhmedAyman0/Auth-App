import { Request, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        console.log("user", req)
        return this.authService.login(req.user);
    }
}
