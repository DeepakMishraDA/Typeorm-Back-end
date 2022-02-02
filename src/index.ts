import { createConnection } from "typeorm";
//import dotenv from "dotenv";

import { Client } from "./entity-schemas/Clients";

const app = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "XXXXXX",
      database: "jobs",
      entities: [Client],
      synchronize: true,
    });
    console.log("Connection is established!");
  } catch (error) {
    console.log(error);
  }
};

app();
