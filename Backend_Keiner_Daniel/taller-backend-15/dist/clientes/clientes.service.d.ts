import { Repository } from 'typeorm';
import { Clientes } from './entities/clientes.entity';
import { CreateUserDto } from './dto/create-clientes.dto';
export declare class ClientesService {
    private clientesRepository;
    constructor(clientesRepository: Repository<Clientes>);
    findAll(): Promise<Clientes[]>;
    createUser(dto: CreateUserDto): Promise<Clientes>;
    deleteUser(id: number): Promise<void>;
}
