import { Controller, HttpStatus, ParseFilePipeBuilder, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from '../services/image.service';

@Controller('/images')
export class ImagesController {
    constructor(private imageService: ImageService) {
    }

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@Req() request,
        @UploadedFile(
            new ParseFilePipeBuilder()
                .addFileTypeValidator({
                    fileType: /(jpg|jpeg|png|gif)$/,
                })
                .addMaxSizeValidator({
                    maxSize: 1024000,
                    message: 'La imagen no puede superar el 1MB',
                })
                /*
                Este error dice que el servidor entiende el tipo de contenido de la solicitud,
                la sintaxis tambien es correcta,
                pero no pudo procesar las instrucciones necesarias
                */
                .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY })
        )
        file: Express.Multer.File
    ) {
        const userData = JSON.parse(request.body.data);
        return await this.imageService.uploadImage(file, userData);
    }
}