console.log("hello world!!!");
// import { createServer } from "./utils/server";

// createServer()
//   .then((server) => {
//     server.listen(3000, () => {
//       console.info(`Listening on http://localhost:3000`);
//     });
//   })
//   .catch((err) => {
//     console.error(`Error: ${err}`);
//   })

import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import env from "./utils/validateEnv";
const app = express();

const port = env.DEV_PORT;

if (env.MONGODB_URL && port) {
  mongoose
    .connect(env.MONGODB_URL)
    .then(() => {
      console.log("[INFO] Mongoose is connected");
      app.listen(port, () => {
        console.log("[INFO] Server is running on port: " + port);
      });
    })
    .catch(console.error);
}

app.get("/", (req, res) => {
  res.send("hi!");
});

console.log("egeegegTEegegeeST23eee");
