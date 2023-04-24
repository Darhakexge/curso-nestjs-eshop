import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}
    async create(createProductDto: CreateProductDto) {
        const product = this.productRepository.create(createProductDto);

        await this.productRepository.save(product);

        return product;
    }

    async findAll() {
        return await this.productRepository.find();
    }

    async findOne(id: string) {
        const product = await this.productRepository.findOneOrFail({
            where: { id },
        });

        return product;
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        return `This action updates a #${id} product`;
    }

    async remove(id: string) {
        const product = await this.findOne(id);
        this.productRepository.remove(product);
    }
}
