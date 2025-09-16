import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateUserDto } from './dto/create-clientes.dto';
import { Clientes } from './entities/clientes.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private usuariosService: ClientesService) {}

  @Get('/')
  getClientes(): Promise<Clientes[]> {
    return this.usuariosService.findAll();
  }

  @Post()
  create(@Body() dto: CreateUserDto): Promise<Clientes> {
    return this.usuariosService.createUser(dto);
  }

  @Delete(':id')
  deleteClientes(@Param('id') id: string): Promise<void> {
    return this.usuariosService.deleteUser(+id);
  }
}
