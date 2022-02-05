import {
  Entity,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Person } from "./util/Person";
import { Transaction } from "./Transaction";
import { Banker } from "./Bankers";

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

  @Column()
  bankerId: Banker;

  @OneToOne(() => Banker, (banker) => banker.client)
  @JoinColumn()
  banker: Banker;
}
