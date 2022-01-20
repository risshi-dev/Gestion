import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongooseConnect from "./config/db.js";
import userRoute from "./routes/UserRoutes.js";
import projectRoute from "./routes/ProjectRoutes.js";
import cardRoute from "./routes/CardRoutes.js";

const app = express();
app.use(cors());

dotenv.config();

await mongooseConnect();

app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  console.log("API is running...🤩");
  next();
});
app.use("/api/user", userRoute);
app.use("/project", projectRoute);
app.use("/card", cardRoute);

app.listen(5000, console.log("server is running... "));
