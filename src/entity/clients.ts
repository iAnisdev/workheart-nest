import { Entity , Column ,CreateDateColumn , UpdateDateColumn, PrimaryGeneratedColumn , Exclusion} from 'typeorm'

@Entity()
@Exclusion('password')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fname: string;

    @Column()
    lname: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: string

    @Column("varchar", { length: 200 })
    description: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date


    @UpdateDateColumn()
    updatedAt: Date
}