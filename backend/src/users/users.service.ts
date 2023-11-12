import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async insertUser(user: User) {
        const decryptedPassword = await this.decryptPassword(user.password);
        const newUser = new this.userModel({
            email: user.email,
            name: user.name,
            password: decryptedPassword,
        });
        await newUser.save();
        return newUser;
    }
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(email): Promise<User> {
        return this.userModel.findOne({ email })
    }


    private async decryptPassword(password) {
        const salt = 10;
        return await bcrypt.hash(password, salt);
    }

}
