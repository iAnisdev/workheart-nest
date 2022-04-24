import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { updateClientPasswordDto } from './dto/update-client-password.dto';
import * as bcrypt from 'bcrypt';

import { Client } from '../entity/clients';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
  ) {}

  async create(data: CreateClientDto) {
    data.password = await bcrypt.hash(data.password, 10);
    const newClient = await this.clientsRepository.create(data);
    await this.clientsRepository.save(data);
    return newClient;
  }

  async findAll() {
    return await this.clientsRepository.find();
  }

  async findOne(id: number) {
    return await this.clientsRepository.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<UpdateClientDto>) {
    await this.clientsRepository.update({ id }, data);
    return await this.clientsRepository.findOne({ where: { id } });
  }

  async updatePassword(id: number, data: updateClientPasswordDto) {
    await this.clientsRepository.update({ id }, data);
    return await this.clientsRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.clientsRepository.delete({ id });
    return { deleted: true };
  }
}
