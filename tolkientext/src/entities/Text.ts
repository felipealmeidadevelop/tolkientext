import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Text {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    image_id: string

    @Column()
    language: string

    @Column()
    text: string

}
