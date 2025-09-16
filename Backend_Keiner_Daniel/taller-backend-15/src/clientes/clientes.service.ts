import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './entities/clientes.entity';
import { CreateUserDto } from './dto/create-clientes.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
  ) {}

  async findAll(): Promise<Clientes[]> {
    return this.clientesRepository.find();
  }

  async createUser(dto: CreateUserDto): Promise<Clientes> {
    const user = this.clientesRepository.create(dto);
    return this.clientesRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    const result = await this.clientesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
  }
}
