import { Injectable } from '@nestjs/common';
import axiosInstance from 'src/axios/config';
import { IUserDTO } from 'src/usuario/dto/usuario.dto';
import { DbService } from './db.service';
import userQueries from 'src/common/queries/user.queries';
const key: string = '6e9081ee31bf5d7ef88c15783c3b6bba';

@Injectable()
export class ImageService {

    constructor(private dbService: DbService) { }


    async uploadImage(file: Express.Multer.File, user: IUserDTO) {
        try {
            const formdata: FormData = new FormData();
            //Buffer = arreglo de datos donde se guarda la imagen en base a numeros
            formdata.append('image', new Blob([Buffer.from(file.buffer)]));
            formdata.append('key', key);
            formdata.append('name', 'nombre');

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

                await this.dbService.executeSelect(userQueries.insertImageUrl, [imageUrl, deleteUrl, displayUrl, user.id])
            }

            return response.data;
        } catch (error) {
            console.error("Error al subir la imagen o actualizar la base de datos:", error);
            throw new Error("Error al subir la imagen o actualizar la base de datos");
        }
    }
}