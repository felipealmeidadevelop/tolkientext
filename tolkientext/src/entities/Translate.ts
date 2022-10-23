import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Translate{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    text_id: number

    @Column()
    text_laguage: string

    @Column()
    language_to_translate: string

    @Column()
    translated_text: string
}