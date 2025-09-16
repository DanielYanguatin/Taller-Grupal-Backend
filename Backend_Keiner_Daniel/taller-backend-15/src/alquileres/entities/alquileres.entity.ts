import { Clientes } from 'src/clientes/entities/clientes.entity';
import { Vehiculos } from 'src/vehiculos/entities/vehiculos.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'alquileres' })
export class Alquileres {
  @PrimaryGeneratedColumn()
  id_alquileres: number;

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @ManyToOne(() => Clientes, (cliente) => cliente.alquileres)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Clientes;

  @ManyToOne(() => Vehiculos, (vehiculo) => vehiculo.alquileres)
  @JoinColumn({ name: 'vehiculo_id' })
  vehiculo: Vehiculos;
}
