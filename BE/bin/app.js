"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
//   });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.DEV_PORT;
if (process.env.MONGODB_URL) {
    mongoose_1.default
        .connect(process.env.MONGODB_URL)
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
console.log("TEST23");
