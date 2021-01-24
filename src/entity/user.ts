import {Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn} from "typeorm"

@Entity()
export class User {


    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: 'varchar'})
    name?: string;

    // @Column()
    // description: string | undefined;
    //
    // @Column()
    // filename: string | undefined;
    //
    // @Column()
    // views: number | undefined;
    //
    // @Column()
    // isPublished: boolean | undefined;

}
