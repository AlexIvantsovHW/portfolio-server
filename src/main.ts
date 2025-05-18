import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Portfolio API ')
    .setDescription('API for portfolio backoffice')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://90.156.158.26:3000',
      'http://90.156.158.26:3000',
      'https://aleks-ivantsov.com',
      'http://localhost:4173',
      'http://localhost:5173',
    ],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });
  const PORT = process.env.PORT ? Number(process.env.PORT) : 9000;

  await app.listen(PORT ?? 9000);
}
bootstrap();
/*  */
