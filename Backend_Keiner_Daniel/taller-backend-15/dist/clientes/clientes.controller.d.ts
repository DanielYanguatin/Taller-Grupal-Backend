import { ClientesService } from './clientes.service';
import { CreateUserDto } from './dto/create-clientes.dto';
import { Clientes } from './entities/clientes.entity';
export declare class ClientesController {
    private usuariosService;
    constructor(usuariosService: ClientesService);
    getClientes(): Promise<Clientes[]>;
    create(dto: CreateUserDto): Promise<Clientes>;
    deleteClientes(id: string): Promise<void>;
}
