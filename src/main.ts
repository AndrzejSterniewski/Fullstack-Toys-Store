import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  await app.enableShutdownHooks();
  // alternatively:
  // await app.enableCors();
  app.use('/public', express.static('public'));
  await app.listen(8000);
}
bootstrap();