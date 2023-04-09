import { ConfigObject } from '@nestjs/config';

export interface AppConfigInterface extends ConfigObject {
    environment: string;
    port: number;
}

export default (): AppConfigInterface => ({
    environment: process.env.APP_ENV,
    port: parseInt(process.env.APP_PORT || '', 10),
});
