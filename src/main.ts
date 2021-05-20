import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');
  app.use(helmet({ contentSecurityPolicy: false }));
  app.setGlobalPrefix('/api');
  await app.listen(port);
  console.log(`FONDU backend: started on ${await app.getUrl()}`);
}

bootstrap();
