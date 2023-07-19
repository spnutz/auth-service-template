import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema({ collection: 'users' })
export class Users {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop()
  role: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
