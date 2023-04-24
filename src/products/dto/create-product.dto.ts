import {
    IsArray,
    IsIn,
    IsInt,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(3)
    title: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    price?: number;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    slug?: string;

    @IsOptional()
    @IsInt()
    @IsPositive()
    stock?: number;

    @IsArray()
    @IsString({ each: true })
    sizes: string[];

    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;
}
