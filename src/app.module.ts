import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

require('dotenv').config();

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './models/clients';
import { Project } from './models/projects';
import { Task } from './models/tasks';
import { ClientsModule } from './resources/clients/clients.module';
import { ProjectsModule } from './resources/projects/projects.module';
import { TasksModule } from './resources/tasks/tasks.module';
import { AuthModule } from './resources/auth/auth.module';
import { IsloggedinMiddleware } from './middlewares/isloggedin/isloggedin.middleware';
import { JwtModule } from '@nestjs/jwt';

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
    JwtModule.register({ secret: process.env.jwt_key }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsloggedinMiddleware)
      .exclude({ path: '/auth/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
