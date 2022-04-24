import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  login(data: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  validate() {
    return `This action returns all auth`;
  }
}
