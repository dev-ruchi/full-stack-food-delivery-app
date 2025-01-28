import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mongoose from "mongoose";

import authRouter from "./routes/auth.js";
import menuRouter from "./routes/menus.js";
import orderRouter from "./routes/orders.js";

const port = process.env.PORT;

(async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
      .then(() => console.log("Connected to DB"));
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    throw error;
  }
})();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use("/auth", authRouter);
app.use("/menu", menuRouter);
app.use("/order", orderRouter);
