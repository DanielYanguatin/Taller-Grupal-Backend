import { Alquileres } from 'src/alquileres/entities/alquileres.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'clientes' })
export class Clientes {
  @PrimaryGeneratedColumn()
  id_clientes: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefono: string;

  @OneToMany(() => Alquileres, (alquiler) => alquiler.cliente)
  alquileres: Alquileres[];
}
