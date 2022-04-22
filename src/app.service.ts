import { Injectable } from '@nestjs/common';
import { helloType } from './types/basic'
@Injectable()
export class AppService {
  getHealth(): helloType {
    return {status: 1, msg: 'Service is working fine'};
  }
}
