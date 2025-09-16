import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alquileres } from 'src/alquileres/entities/alquileres.entity';

@Entity({ name: 'vehiculos' })
export class Vehiculos {
  @PrimaryGeneratedColumn()
  id_vehiculos: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  ano: number;

  @Column({ unique: true })
  matricula: string;

  @OneToMany(() => Alquileres, (alquiler) => alquiler.vehiculo)
  alquileres: Alquileres[];
}
