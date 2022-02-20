import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export default class Base extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

// INSERT INTO banker(id,firstname, lastname, email, additional_info,
// 				   address,employee_number, joined_date)
// VALUES (123998, 'Deepak', 'Mishra', Null, ('{"age": "09", "contact": "670987654"}'), 'Coppistrasse 18, 8th floor, 728-23-08-0','UyetXX22',
// 		'1989-10-16');
