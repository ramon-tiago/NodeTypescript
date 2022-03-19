import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid"
import { hash} from "bcryptjs"
import { Exclude } from "class-transformer";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

};

export { User };