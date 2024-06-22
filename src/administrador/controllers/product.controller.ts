import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { IProductDTO } from '../dto/product.dto';

@Controller('/sales-sistem')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get()
    async allProducts() {
        const products = await this.productService.getAllProducts();
        if (!products) {
            throw new HttpException('No se pudieron obtener los productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return products;
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
        const productToEliminate = await this.productService.deleteProductById(id);
        if (!productToEliminate) {
            throw new HttpException('Error!!! No se pudo eliminar el producto', HttpStatus.NOT_FOUND);
        }
        return productToEliminate;
    }

    @Put(':id')
    async updateProductById(@Param('id') id: number, @Body() body: IProductDTO) {
        const productToModify = await this.productService.updateProductById(id, body);
        if (!productToModify) {
            throw new HttpException('Error!!! No se pudo actualizar el producto', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return productToModify;
    }

    @Post('/create-product')
    async createProduct(@Body() body: IProductDTO) {
        const product = await this.productService.createProduct(body);
        if (!product) {
            throw new HttpException('Ocurrio un error al crear el producto deseado', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return product;
    }
}
