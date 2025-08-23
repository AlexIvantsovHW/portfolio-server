import { Module } from '@nestjs/common';
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

import { UsersModule } from './users/users.module';
import { SoftwareModule } from './software/software.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JobsModule,
    UniversityModule,
    ProjectsModule,
    FeedbacksModule,
    PersonalModule,
    ContactModule,
    AuthModule,
    UsersModule,
    SoftwareModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
