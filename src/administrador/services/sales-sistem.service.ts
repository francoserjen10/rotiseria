import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    async deleteProductById(id: number): Promise<any> {
        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(productQueries.deleteById, [id]);
        return resultQuery;
    }

    async updateProductById(id: number, product: IProductDTO): Promise<any> {
        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(productQueries.updateById, [product.name, product.description, product.price, product.categoryId, id]);
        if (resultQuery.affectedRows === 0) {
            throw new HttpException('No se pudo actualizar el producto', HttpStatus.NOT_FOUND);
        }
        return product;
    }

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        const resultQuery: ResultSetHeader = await this.dbService.executeQuery(productQueries.insert,
            [product.name, product.description, product.price, product.categoryId]
        );

        return {
            id: resultQuery.insertId,
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: product.categoryId
        }
    }
}