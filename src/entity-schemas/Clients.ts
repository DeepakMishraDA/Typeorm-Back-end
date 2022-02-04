import { Entity, Column, CreateDateColumn } from "typeorm";
import { Person } from "./util/Person";

@Entity()
export class Client extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;

  @Column({
    type: "numeric",
  })
  amount: number;

  @Column({
    default: "is_active",
  })
  status: string;

  @CreateDateColumn()
  created_on: Date;
}
