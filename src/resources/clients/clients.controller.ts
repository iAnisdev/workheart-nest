import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { updateClientPasswordDto } from './dto/update-client-password.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() data: CreateClientDto) {
    let client = await this.clientsService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Client created successfully',
      client,
    };
  }

  @Get()
  async findAll() {
    let clients = await this.clientsService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Clients fetched successfully',
      clients,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let client = await this.clientsService.findOne(+id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Client fetched successfully',
      client,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateClientDto) {
    return this.clientsService.update(+id, data);
  }

  @Patch(':id/password')
  updatePassword(
    @Param('id') id: string,
    @Body() data: updateClientPasswordDto,
  ) {
    return this.clientsService.updatePassword(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
