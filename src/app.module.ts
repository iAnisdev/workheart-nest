import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

require('dotenv').config();

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './entity/clients';
import { Project } from './entity/projects';
import { Task } from './entity/tasks';
import { ClientsModule } from './clients/clients.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Client, Project, Task],
      synchronize: true,
    }),
    ClientsModule,
    ProjectsModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
