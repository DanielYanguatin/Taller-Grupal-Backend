import { Repository } from 'typeorm';
import { Vehiculos } from './entities/vehiculos.entity';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
export declare class VehiculosService {
    private vehiculosRepository;
    constructor(vehiculosRepository: Repository<Vehiculos>);
    findAll(): Promise<Vehiculos[]>;
    findOne(id: number): Promise<Vehiculos>;
    update(id: number, updateVehiculoDto: UpdateVehiculoDto): Promise<Vehiculos>;
}
