import { createConnection } from "typeorm";
import dotenv from "dotenv";

// import { Client } from "./entity-schemas/Clients";
import { Sensor } from "./entity-schemas/Sensor";
import { Building } from "./entity-schemas/Building";
import { Reading } from "./entity-schemas/Reading";

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
      entities: [Sensor, Building, Reading],
      synchronize: true,
    });
    //const tableClExist = await Sensor.find();
    console.log("Successful");
  } catch (error) {
    console.log(error);
  }
};

app();
