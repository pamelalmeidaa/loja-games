import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name:"tb_categorias"})
export class Categoria {

    @PrimaryColumn()
    id: number

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    titulo: string

    @IsNotEmpty ()
    @Column({length: 1000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date

    @ManyToOne(() => Produto, (produto) => produto.categoria, {
        onDelete: "CASCADE"
    })
    produto: Produto
}