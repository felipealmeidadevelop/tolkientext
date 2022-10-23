import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Image {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    filename: string

    @Column()
    path: string

}
