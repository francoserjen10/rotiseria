import { Body, Controller, Delete, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SalesSistemService } from '../services/sales-sistem.service';

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

    @Delete('/delete-product')
    async deleteProduct(@Body() body: { id: number }) {
        const productToEliminate = await this.salesSistemService.deleteProduct(body.id);
        if (!productToEliminate) {
            throw new HttpException('Error!!! No se pudo eliminar el producto', HttpStatus.NOT_FOUND);
        }
        return productToEliminate;
    }
}
