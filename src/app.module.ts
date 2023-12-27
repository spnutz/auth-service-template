import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './modules/health/health.controller';
import { HealthModule } from './modules/health/health.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { mongo, pg } from './config/database.config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { UsersModule } from './modules/users/users.module';
// import { AccessTokenStrategy } from './modules/auth/strategies/access-token.strategy';
import { AccessTokenGuard } from './common/guards/access-token.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongo, pg],
    }),
    TerminusModule,
    HealthModule,
    HttpModule,
    AuthModule,
    DatabaseModule,
    UsersModule,
  ],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
  controllers: [HealthController],
})
export class AppModule {}
