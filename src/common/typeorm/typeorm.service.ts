import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(
        @Inject(ConfigService) private readonly config: ConfigService,
    ) {}

    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.config.get<string>('database.host'),
            port: this.config.get<number>('database.port'),
            database: this.config.get<string>('database.database'),
            username: this.config.get<string>('database.username'),
            password: this.config.get<string>('database.password'),
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}
