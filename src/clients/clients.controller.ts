import { Controller, Get } from '@nestjs/common';

@Controller('clients')
export class ClientsController {

    @Get()
    getClients(): any{
        return []
    }

}