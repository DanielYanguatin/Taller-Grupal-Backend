// NotFoundException en el de abajo
import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { Vehiculos } from './entities/vehiculos.entity';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Get('/')
  async getVehiculos(): Promise<Vehiculos[]> {
    return this.vehiculosService.findAll();
  }

  @Get(':id')
  async getVehiculo(@Param('id') id: string): Promise<Vehiculos> {
    return this.vehiculosService.findOne(+id);
  }

  @Put(':id')
  async updateVehiculo(
    @Param('id') id: string,
    @Body() updateVehiculoDto: UpdateVehiculoDto,
  ): Promise<Vehiculos> {
    return this.vehiculosService.update(+id, updateVehiculoDto);
  }
}
// import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

// @Controller('vehiculos')
// export class VehiculosController {
//   @Get('/')
//   getVehiculos() {
//     return 'Obteniendo vehiculos';
//   }

//   @Post('/')
//   postVehiculos() {
//     return 'Ingresando vehiculo';
//   }

//   @Put('/')
//   putVehiculos() {
//     return 'Actualizando vehiculo';
//   }

//   @Delete('/')
//   deleteVehiculos() {
//     return 'Eliminando vehiculo';
//   }
// }
