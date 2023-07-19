import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/common/schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
  ) {}

  async getById(id: string): Promise<UsersDocument> {
    const user = await this.userModel.findById(id);
    return user;
  }
}
