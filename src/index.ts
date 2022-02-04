import { createConnection } from "typeorm";
import dotenv from "dotenv";

import { Client } from "./entity-schemas/Clients";
import { Banker } from "./entity-schemas/Bankers";
import { Transaction } from "./entity-schemas/Transaction";

dotenv.config();

const app = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.Host,
      port: Number((process.env.Port as string) || 5432),
      username: process.env.Username,
      password: process.env.Password as string,
      database: process.env.Database as string,
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    const tableClExist = await Client.find();
    console.log(tableClExist.push());
  } catch (error) {
    console.log(error);
  }
};

app();
