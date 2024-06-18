import { Controller, Delete, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SalesSistemService } from '../services/sales-sistem.service';

@Controller('/sales-sistem')
export class SalesSistemController {

    constructor(private salesSistem: SalesSistemService) { }

    @Get()
    async allProducts() {
        const products = await this.salesSistem.getAllProducts();
        if (!products) {
            throw new HttpException('No se pudieron obtener los productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return products;
    }
}
