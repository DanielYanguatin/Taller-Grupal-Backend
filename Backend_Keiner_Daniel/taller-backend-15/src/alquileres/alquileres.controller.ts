import { Controller, Get, Param } from '@nestjs/common';
import { AlquileresService } from './alquileres.service';
import { Alquileres } from './entities/alquileres.entity';

@Controller('alquileres')
export class AlquileresController {
  constructor(private readonly alquileresService: AlquileresService) {}

  @Get(':id')
  getAlquiler(@Param('id') id: string): Promise<Alquileres> {
    return this.alquileresService.findOne(+id);
  }
}
