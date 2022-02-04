import { Entity, Column, CreateDateColumn } from "typeorm";
import { Person } from "./util/Person";

@Entity()
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  @CreateDateColumn()
  joined_on: Date;
}
