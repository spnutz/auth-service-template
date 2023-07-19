import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  public createMongooseOptions(): MongooseModuleOptions {
    const user = this.config.get<string>('database.user');
    const password = this.config.get<string>('database.password');
    const name = this.config.get<string>('database.name');
    const uri = `mongodb+srv://${user}:${password}@${name}.mfllie3.mongodb.net/auth-service`;
    const db: MongooseModuleOptions = {
      uri,
    };
    return db;
  }
}
