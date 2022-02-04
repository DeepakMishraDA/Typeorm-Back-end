import {
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  CreateDateColumn,
  Column,
  BaseEntity,
} from "typeorm";

enum Transactiontypes {
  Deposit = "Deposit",
  Withdraw = "Withdrawl",
}

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: Transactiontypes,
  })
  @Generated("uuid")
  type: string;

  @CreateDateColumn()
  date: Date;
}
