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
    const user = this.config.get<string>('mongo.user');
    const password = this.config.get<string>('mongo.password');
    const dbName = this.config.get<string>('mongo.name');
    const uri = `mongodb://${user}:${password}@localhost:27017`;
    const db: MongooseModuleOptions = {
      uri,
      dbName: dbName,
    };
    return db;
  }
}
