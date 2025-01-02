import axios, { AxiosInstance } from "axios";
import { ConfigService } from "@nestjs/config";

const configService = new ConfigService;
const baseURL = configService.get<string>('IMG_BASE_URL');
const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": 'multipart/form-data',
    },
});

export default axiosInstance;