import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() data: CreateAuthDto) {
    return await this.authService.login(data);
  }

  @Get('/validate')
  validate(@Req() request) {
    return request.client;
  }
}
