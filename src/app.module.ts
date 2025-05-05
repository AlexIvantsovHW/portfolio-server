/* import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { UniversityModule } from './university/university.module';
import { ProjectsModule } from './projects/projects.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { PersonalModule } from './personal/personal.module';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
    }),
    JobsModule,
    UniversityModule,
    ProjectsModule,
    FeedbacksModule,
    PersonalModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 */import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { UniversityModule } from './university/university.module';
import { ProjectsModule } from './projects/projects.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { PersonalModule } from './personal/personal.module';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JobsModule,
    UniversityModule,
    ProjectsModule,
    FeedbacksModule,
    PersonalModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService], 
})
export class AppModule {}
