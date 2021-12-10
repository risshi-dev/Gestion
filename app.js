import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongooseConnect from "./config/db.js";

const app = express();
dotenv.config();

await mongooseConnect();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => res.send(" CHal rha H bHenChod"));

app.listen(5000);
