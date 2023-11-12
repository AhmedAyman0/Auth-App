import { UserSchema } from './schemas/user.schema';
import { User } from './schemas/user.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  exports: [UsersService],
})
export class UsersModule { }
