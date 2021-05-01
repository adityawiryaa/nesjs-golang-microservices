import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/module/app.module';
import { ServerConfig } from './infrastructure/config/server-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = ServerConfig.APP_PORT || 3000;

  const server = await app.listen(port, () => {
    Logger.log(` Running on port ${port} `)
  });

  server.setTimeout(1800000); // 30 Minutes
}
bootstrap();
