import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool, createPool, PoolConnection, FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2/promise'

@Injectable()

export class DbService {
    private pool: Pool;
    constructor(private configService: ConfigService) {
        this.pool = createPool({
            port: this.configService.get<number>('DB_PORT'),
            database: this.configService.get<string>('MYSQL_DATABASE'),
            password: this.configService.get<string>('DB_PASSWORD'),
            host: this.configService.get<string>('DB_HOST'),
            user: this.configService.get<string>('DB_USER'),
            // cantidad maxima de conexiones en el pool
            connectionLimit: 10,
        });
    };

    executeQuery = async (sql: string, param: any[]): Promise<ResultSetHeader> => {
        const connection: PoolConnection = await this.pool.getConnection();
        const [result]: [ResultSetHeader, FieldPacket[]] = await connection.query<ResultSetHeader>(sql, param);
        this.pool.releaseConnection(connection);
        return result;
    };

    executeSelect = async (sql: string, param: any[]): Promise<RowDataPacket[]> => {
        const connection: PoolConnection = await this.pool.getConnection();
        const [result]: [RowDataPacket[], FieldPacket[]] = await connection.query<RowDataPacket[]>(sql, param);
        this.pool.releaseConnection(connection);
        return result;
    };
}

