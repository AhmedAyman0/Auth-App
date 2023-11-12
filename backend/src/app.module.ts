import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://ahmedaelkemary:RLZnVe8WGJmjFt6T@cluster0.vtxectp.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
