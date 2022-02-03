import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Client extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    unique: true,
  })
  email: string;

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

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    contact: number;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  address: string[];

  @CreateDateColumn()
  created_on: Date;
}
