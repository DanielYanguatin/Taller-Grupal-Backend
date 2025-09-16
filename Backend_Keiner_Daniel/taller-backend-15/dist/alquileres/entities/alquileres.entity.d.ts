import { Clientes } from 'src/clientes/entities/clientes.entity';
import { Vehiculos } from 'src/vehiculos/entities/vehiculos.entity';
export declare class Alquileres {
    id_alquileres: number;
    fecha_inicio: Date;
    fecha_fin: Date;
    cliente: Clientes;
    vehiculo: Vehiculos;
}
