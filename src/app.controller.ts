import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { healthType } from './types/basic';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): healthType {
    return this.appService.getHealth();
  }
}
