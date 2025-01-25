import "dotenv/config";
import express from "express"; 
import bodyParser from "body-parser";
import cors from "cors";

import mongoose from "mongoose";

import authRouter from "./routes/auth.js"
import menuRouter from "./routes/menus.js"

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Failed to connect to DB:", err));

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/auth", authRouter);
app.use("/menus", menuRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  }); 

