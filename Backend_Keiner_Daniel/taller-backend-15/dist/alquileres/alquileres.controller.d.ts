import { AlquileresService } from './alquileres.service';
import { Alquileres } from './entities/alquileres.entity';
export declare class AlquileresController {
    private readonly alquileresService;
    constructor(alquileresService: AlquileresService);
    getAlquiler(id: string): Promise<Alquileres>;
}
