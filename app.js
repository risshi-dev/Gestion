import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongooseConnect from "./config/db.js";
import userRoute from "./routes/UserRoutes.js";

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

// for testing purposes
app.use((req, res, next) => {
  req.user_id = "61b74484f2234a73b38b4fd6";
  next();
});

app.get("/", (req, res) => res.send(" CHal rha H bHenChod"));
app.use("/api/user", userRoute);

app.listen(5000, console.log("server is running "));
