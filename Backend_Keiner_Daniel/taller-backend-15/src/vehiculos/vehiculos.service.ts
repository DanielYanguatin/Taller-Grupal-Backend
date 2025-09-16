import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculos } from './entities/vehiculos.entity';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculos)
    private vehiculosRepository: Repository<Vehiculos>,
  ) {}

  async findAll(): Promise<Vehiculos[]> {
    return this.vehiculosRepository.find();
  }

  async findOne(id: number): Promise<Vehiculos> {
    const vehiculo = await this.vehiculosRepository.findOne({
      where: { id_vehiculos: id },
    });
    if (!vehiculo) {
      throw new NotFoundException(`Vehículo con ID ${id} no encontrado`);
    }
    return vehiculo;
  }

  async update(
    id: number,
    updateVehiculoDto: UpdateVehiculoDto,
  ): Promise<Vehiculos> {
    const vehiculo = await this.findOne(id);
    Object.assign(vehiculo, updateVehiculoDto);
    return this.vehiculosRepository.save(vehiculo);
  }
}
