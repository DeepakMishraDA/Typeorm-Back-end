import {
  Entity,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
} from "typeorm";

import Base from "./util/Base_id";
//import { Reading } from "./Reading";
import { Sensor } from "./Sensor";

@Entity("building")
export class Building extends Base {
  @Column({
    nullable: true,
  })
  address: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    nullable: false,
    unique: true,
  })
  directory_name: string;

  @Column({ nullable: true, unique: false })
  atvise_display_name: string;

  @Column({ type: "boolean", nullable: false, default: false })
  displayable_flag: boolean;

  @Column({ nullable: true, unique: true })
  plc_ip: string;

  // @ManyToMany(() => Banker, (banker) => banker.id)
  // @JoinTable({ name: "client_banker" })
  // banker: Banker[];
}
