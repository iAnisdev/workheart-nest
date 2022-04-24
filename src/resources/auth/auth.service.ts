import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { Client } from './../../models/clients';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
    private readonly jwtService: JwtService,
  ) {}
  async login(data: CreateAuthDto) {
    let client = await this.clientsRepository.findOne({
      where: { email: data.email },
    });
    if (client) {
      let isPasswordCorrect = await bcrypt.compare(
        data.password,
        client.password,
      );
      if (isPasswordCorrect === true) {
        delete client.password;
        let access_token = await this.jwtService.sign(JSON.stringify(client));
        return {
          statusCode: HttpStatus.OK,
          message: 'Login Successful',
          client,
          access_token,
        };
      } else {
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Invalid Password',
        };
      }
    } else {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'No Record found',
      };
    }
  }
}
