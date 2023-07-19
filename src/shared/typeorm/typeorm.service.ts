import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const db = {
      synchronize: false,
      type: 'postgres',
      host: this.config.get<string>('database.host'),
      port: this.config.get<number>('database.port'),
      username: this.config.get<string>('database.user'),
      password: this.config.get<string>('database.password'),
      database: this.config.get<string>('database.name'),
      extra: {
        connectionLimit: 30,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      maxQueryExecutionTime: 2500,
      // logging: true,
    };
    return db as TypeOrmModuleOptions;
  }
}
