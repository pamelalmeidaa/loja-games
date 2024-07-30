import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './services/categoria.service';
import { CategoriaController } from './controllers/categoria.controller';
import { ProdutoModule } from '../produto/produto.module';
import { ProdutoService } from '../produto/service/produto.service';


@Module({
    imports: [TypeOrmModule.forFeature([Categoria]), ProdutoModule],
    providers: [CategoriaService, ProdutoService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})
export class CategoriaModule {}