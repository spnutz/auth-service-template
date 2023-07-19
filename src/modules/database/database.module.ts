import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmConfigService } from 'src/shared/typeorm/typeorm.service';
import { MongooseConfigService } from 'src/shared/mongoose/mongoose.service';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useClass: TypeOrmConfigService,
    // }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
  ],
})
export class DatabaseModule {}
