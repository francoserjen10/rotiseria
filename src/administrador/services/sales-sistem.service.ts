import { Injectable } from '@nestjs/common';
import { RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';
import productQueries from '../queries/products.queries';

@Injectable()
export class SalesSistemService {

    constructor(
        //Crear instancia de servicio a la base de datos
        private dbService: DatabaseService
    ) { }

    //MOSTRAR LOS PRODUCTOS DE LA BASE DE DATOS
    /**
     * llamar al servicio de la base de datos que esta en el modulo common y llamar a executeSelect
     * 
     * ahi dentro llamar a las queri donde muestro los productos
     * 
     * recorrer cada producto 
     * 
     * retornar las propiedades de cada producto
     */

    async getAllProducts(): Promise<any[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(productQueries.selectAll, []);
        const resultProducts: any = resultQuery.map((rs: RowDataPacket) => {
            return {
                //Seguir llamando las propiedades de los productos
                //Crear DTO Y TIPARLOS CON ESO
            }
        })
    }
}

//Tareas:
//(Debo crear las queries de los productos)
//Crear DTO de productos
