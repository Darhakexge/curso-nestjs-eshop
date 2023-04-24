import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFoundInterceptor } from './common/interceptors/entities/entity-not-found/entity-not-found.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);

    app.setGlobalPrefix('api')
        .useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
            }),
        )
        .useGlobalInterceptors(new EntityNotFoundInterceptor());

    await app.listen(configService.get<number>('app.port'));
}
bootstrap();
