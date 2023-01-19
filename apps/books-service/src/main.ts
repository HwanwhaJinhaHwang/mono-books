/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Books service example')
    .setDescription('Everything about books')
    .setVersion('1.0')
    .addTag('books')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // /docs 로 스웨거 서비스
  SwaggerModule.setup('docs', app, document);
  // spec 파일 생성
  writeFileSync(
    join(__dirname, './books.json'),
    JSON.stringify(document, null, 2)
  );

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🥸 Document is running on: http://localhost:${port}/docs`);
}

bootstrap();
