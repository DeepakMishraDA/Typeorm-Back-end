import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Reading } from "./Reading";
import { Building } from "./Building";
import Base from "./util/Base_id";

@Entity("sensor")
export class Sensor extends Base {
  // @Column({ type: "uuid" })
  // building_id: string;

  @Column({ nullable: true, unique: true })
  path: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: "boolean" })
  counter_flag: boolean;

  @Column({ nullable: true })
  node_id: string;

  @ManyToOne(() => Building)
  @JoinColumn({ referencedColumnName: "id", name: "building_id" })
  building_id: Building;
}
