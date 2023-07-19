import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
  public static getEnvName(): string {
    return process.env.ENV_NAME;
  }

  public static getEnvPort(): number {
    return parseInt(process.env.APP_PORT) || 3001;
  }
}
