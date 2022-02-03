import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Banker extends BaseEntity {
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
  employee_number: string;

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
  joined_on: Date;
}
