import {
  Entity,
  PrimaryColumn,
  Generated,
  CreateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Sensor } from "./Sensor";
import Base from "./util/Base_id";

// enum Readingtypes {},

@Entity("reading")
export class Reading extends Base {
  // @Column({
  //   type: "enum",
  //   enum: Readingypes,
  // })
  // @Generated("uuid")
  // type: string;

  @Column({ type: "boolean" })
  boolean: boolean;

  @Column({ type: "double precision" })
  float: number;

  @CreateDateColumn({ type: "timestamp with time zone" })
  datetime: Date;

  @Column({ type: "character varying" })
  string: string;

  @PrimaryColumn({ type: "timestamp with time zone" })
  reading_time: Date;

  // @Column()
  //  sensor_id
  @Column({ type: "integer" })
  integer: number;

  @ManyToOne(() => Sensor)
  @JoinColumn({ referencedColumnName: "id", name: "sensor_id" })
  sensor_id: Sensor;
}
