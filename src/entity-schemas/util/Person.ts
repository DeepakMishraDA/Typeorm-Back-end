import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Person extends BaseEntity {
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
}
