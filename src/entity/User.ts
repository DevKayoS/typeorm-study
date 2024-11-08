import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar")
    name!: string

    @Column("varchar")
    email!: string
    
    @Column("varchar")
    password!: string
}
