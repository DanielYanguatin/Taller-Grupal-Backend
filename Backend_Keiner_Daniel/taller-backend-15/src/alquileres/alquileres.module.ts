import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlquileresController } from './alquileres.controller';
import { AlquileresService } from './alquileres.service';
import { Alquileres } from './entities/alquileres.entity';
import { Clientes } from '../clientes/entities/clientes.entity';
import { Vehiculos } from '../vehiculos/entities/vehiculos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alquileres, Clientes, Vehiculos])],
  controllers: [AlquileresController],
  providers: [AlquileresService],
})
export class AlquileresModule {}
