import { Entity, Column, CreateDateColumn, OneToOne } from "typeorm";
import { Client } from "./Clients";
import { Person } from "./util/Person";

@Entity()
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  @CreateDateColumn()
  joined_date: Date;

  // @Column()
  // clientId: number
}
