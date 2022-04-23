import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Exclusion,
  BeforeInsert,
} from 'typeorm';

@Entity('Clients')
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

  @BeforeInsert()
  hashPassword() {
    return this.password;
  }
  @Column()
  password: string;

  @Column('varchar', { length: 200 })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
