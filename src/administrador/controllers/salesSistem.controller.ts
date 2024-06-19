import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { SalesSistemService } from '../services/salesSistem.service';
import { IProductDTO } from '../dto/product.dto';

@Controller('/sales-sistem')
export class SalesSistemController {

    constructor(private salesSistemService: SalesSistemService) { }

    @Get()
    async allProducts() {
        const products = await this.salesSistemService.getAllProducts();
        if (!products) {
            throw new HttpException('No se pudieron obtener los productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return products;
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
        const productToEliminate = await this.salesSistemService.deleteProductById(id);
        if (!productToEliminate) {
            throw new HttpException('Error!!! No se pudo eliminar el producto', HttpStatus.NOT_FOUND);
        }
        return productToEliminate;
    }

    @Put(':id')
    async updateProductById(@Param('id') id: number, @Body() body: IProductDTO) {
        const productToModify = await this.salesSistemService.updateProductById(id, body);
        if (!productToModify) {
            throw new HttpException('Error!!! No se pudo actualizar el producto', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return productToModify;
    }

    @Post('/create-product')
    async createProduct(@Body() body: IProductDTO) {
        const product = await this.salesSistemService.createProduct(body);
        if (!product) {
            throw new HttpException('Ocurrio un error al crear el producto deseado', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return product;
    }
}
