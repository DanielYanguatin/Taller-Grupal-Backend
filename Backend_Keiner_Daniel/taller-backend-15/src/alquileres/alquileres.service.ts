import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alquileres } from './entities/alquileres.entity';

@Injectable()
export class AlquileresService {
  constructor(
    @InjectRepository(Alquileres)
    private alquileresRepository: Repository<Alquileres>,
  ) {}

  async findOne(id: number): Promise<Alquileres> {
    const alquiler = await this.alquileresRepository.findOne({
      where: { id_alquileres: id },
      relations: ['cliente', 'vehiculo'],
    });

    if (!alquiler) {
      throw new NotFoundException(`Alquiler con ID ${id} no encontrado`);
    }
    return alquiler;
  }
}
