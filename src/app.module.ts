import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

require('dotenv').config()

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { Client } from './entity/clients'
import { Project } from './entity/projects'
import { Task } from './entity/task'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Client ,  Project , Task],
      synchronize: true,
    })
  ],
  controllers: [AppController, ClientsController, ProjectsController, TasksController],
  providers: [AppService, ClientsService, ProjectsService, TasksService],
})
export class AppModule {}
