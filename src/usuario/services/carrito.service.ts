import { Injectable } from '@nestjs/common';
import { DbService } from 'src/common/services/db.service';
import { ICarritoDTO } from '../dto/carritousuario.dto';
import { ResultSetHeader } from 'mysql2';
import carritoQueries from '../queries/carrito.querie';

@Injectable()
export class CarritoService {

    constructor(private dbService: DbService) { }

    async createCarritoService(carrito: ICarritoDTO): Promise<ICarritoDTO | string> {

        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(
            carritoQueries.insert,
            [carrito.usuarioId]
        );

        return {
            id: resultQuery.insertId,
            usuarioId: carrito.usuarioId
        }
    }

}
