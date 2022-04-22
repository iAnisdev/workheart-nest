import { Injectable } from '@nestjs/common';
import { healthType } from './types/basic'
@Injectable()
export class AppService {
  getHealth(): healthType {
    return {status: 1, msg: 'Service is working fine'};
  }
}
