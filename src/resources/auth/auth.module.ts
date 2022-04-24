import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './../../models/clients';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    JwtModule.register({ secret: process.env.jwt_key }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
