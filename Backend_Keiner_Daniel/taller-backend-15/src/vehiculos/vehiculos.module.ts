import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculosController } from './vehiculos.controller';
import { VehiculosService } from './vehiculos.service';
import { Vehiculos } from './entities/vehiculos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculos])],
  controllers: [VehiculosController],
  providers: [VehiculosService],
  exports: [TypeOrmModule],
})
export class VehiculosModule {}
