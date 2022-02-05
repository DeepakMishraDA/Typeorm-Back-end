import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
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
    nullable: true,
  })
  address: string[];
}
