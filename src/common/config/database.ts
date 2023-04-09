import { ConfigObject } from '@nestjs/config';

export interface DatabaseConfigInterface extends ConfigObject {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
}

export default (): DatabaseConfigInterface => ({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '', 10),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});
