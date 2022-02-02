import { createConnection } from "typeorm";
//import dotenv from "dotenv";

const app = async () => {
  try {
    await createConnection({
      type: process.env["Type"],
      host: process.env["Host"],
      port: process.env["Port"],
      username: process.env["Username"],
      password: process.env["Password"],
      database: process.env["Database"],
    });
    console.log("Connection is established!");
  } catch (error) {
    console.log(error);
  }
};

app();
