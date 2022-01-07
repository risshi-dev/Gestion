import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongooseConnect from "./config/db.js";
import userRoute from "./routes/UserRoutes.js";
import projectRoute from "./routes/ProjectRoutes.js";
import cardRoute from "./routes/CardRoutes.js";

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

app.use("/", () => console.log("API is running...🤩"));
app.use("/api/user", userRoute);
app.use("/project", projectRoute);
app.use("/card", cardRoute);

app.listen(5000, console.log("server is running... "));
