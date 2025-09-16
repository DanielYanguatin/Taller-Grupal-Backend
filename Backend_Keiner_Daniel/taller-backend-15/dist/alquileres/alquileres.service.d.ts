import { Repository } from 'typeorm';
import { Alquileres } from './entities/alquileres.entity';
export declare class AlquileresService {
    private alquileresRepository;
    constructor(alquileresRepository: Repository<Alquileres>);
    findOne(id: number): Promise<Alquileres>;
}
