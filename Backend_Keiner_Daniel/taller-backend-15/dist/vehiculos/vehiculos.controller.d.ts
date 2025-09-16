import { VehiculosService } from './vehiculos.service';
import { Vehiculos } from './entities/vehiculos.entity';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
export declare class VehiculosController {
    private readonly vehiculosService;
    constructor(vehiculosService: VehiculosService);
    getVehiculos(): Promise<Vehiculos[]>;
    getVehiculo(id: string): Promise<Vehiculos>;
    updateVehiculo(id: string, updateVehiculoDto: UpdateVehiculoDto): Promise<Vehiculos>;
}
