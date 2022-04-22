import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { helloType } from './types/basic'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): helloType {
    return this.appService.getHealth();
  }
}
