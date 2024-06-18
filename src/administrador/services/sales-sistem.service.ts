import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';
import productQueries from '../queries/products.queries';
import { IProductDTO } from '../dto/product.dto';

@Injectable()
export class SalesSistemService {

    constructor(private dbService: DatabaseService) { }

    async getAllProducts(): Promise<IProductDTO[]> {
        const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(productQueries.selectAll, []);
        const resultProducts: IProductDTO[] = resultQuery.map((rs: RowDataPacket) => {
            return {
                id: rs['producto_id'],
                name: rs['nombre'],
                description: rs['descripcion'],
                price: rs['precio'],
                categoryId: rs['rubro_id'],
            }
        })
        return resultProducts;
    }

    async deleteProduct(id: number): Promise<any> {
        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(productQueries.deleteById, [id]);
        return resultQuery;
    }
}
