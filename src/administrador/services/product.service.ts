import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/common/services/db.service';
import productQueries from '../queries/products.queries';
import { IProductDTO } from '../dto/product.dto';
import axiosInstance from 'src/axios/config';

const key: string = '6e9081ee31bf5d7ef88c15783c3b6bba';

@Injectable()
export class ProductService {

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
                urlImage: rs['url_image']
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

    async uploadImage(file: Express.Multer.File, product: IProductDTO) {
        try {
            const formdata: FormData = new FormData();
            // Buffer = arreglo de datos donde se guarda la imagen en base a numeros
            formdata.append('image', new Blob([Buffer.from(file.buffer)]));
            formdata.append('key', key);
            //  Cambiar nombre string => nombre de producto (el rubro)
            formdata.append('name', product.name);

            const response = await axiosInstance.post('/upload', formdata);

            if (response && response.data) {
                const responseData = response.data;

                if (!responseData) {
                    throw new Error("Ocurrio un error con responseData");
                }

                const imageUrl = response.data.data.url;
                const deleteUrl = response.data.data.delete_url;
                const displayUrl = response.data.data.display_url;

                if (!imageUrl && !deleteUrl && !displayUrl) {
                    throw new Error("Ocurrio un error con las url de las imagenes");
                }

                await this.dbService.executeSelect(productQueries.insertImageUrl, [imageUrl, deleteUrl, displayUrl, product.id])
            }

            return response.data;
        } catch (error) {
            console.error("Error al subir la imagen o actualizar la base de datos:", error);
            throw new Error("Error al subir la imagen o actualizar la base de datos");
        }
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
            categoryId: product.categoryId,
            urlImage: product.urlImage
        }
    }
}