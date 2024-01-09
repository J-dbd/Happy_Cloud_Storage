import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import env from "./utils/validateEnv";
import cors from "cors";
import { userAuthRouter } from "./routes/UserRoutes";
import { postRouter } from "./routes/PostRoutes";
import errorHandler from "./middlewares/errorMiddleare";

const app = express();

/** cors  */
app.use(cors());

/** express's basic middlewares  */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** DB connection  */

const port = env.DEV_PORT;

if (env.MONGODB_URL && port) {
  mongoose
    .connect(env.MONGODB_URL)
    .then(() => {
      console.log("[INFO] Mongoose is connected: ");
      app.listen(port, () => {
        console.log("[INFO] Server is running on port: " + port);
      });
    })
    .catch(console.error);
}

/** root page */
app.get("/", (req, res) => {
  res.send("안녕하세요, Happy Storage Cloud 입니다.");
});

/** Router, Services */
app.use(userAuthRouter);
app.use(postRouter);

app.use(errorHandler);
