import { Alquileres } from 'src/alquileres/entities/alquileres.entity';
export declare class Vehiculos {
    id_vehiculos: number;
    marca: string;
    modelo: string;
    ano: number;
    matricula: string;
    alquileres: Alquileres[];
}
