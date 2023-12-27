import { registerAs } from '@nestjs/config';

export const pg = registerAs('pg', () => ({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: process.env.DATABASE_PORT,
  name: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}));
export const mongo = registerAs('mongo', () => ({
  name: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
}));
