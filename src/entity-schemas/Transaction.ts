import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./Clients";

enum Transactiontypes {
  Deposit = "Deposit",
  Withdraw = "Withdrawl",
}

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({
  //   type: "enum",
  //   enum: Transactiontypes,
  // })
  // @Generated("uuid")
  // type: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Client, (client) => client.id, { onDelete: "SET NULL" })
  client: Client;
}
