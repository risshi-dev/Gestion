import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongooseConnect from "./config/db.js";
import userRoute from "./routes/UserRoutes.js";
import projectRoute from "./routes/ProjectRoutes.js";
import cardRoute from "./routes/CardRoutes.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

await mongooseConnect();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/user", userRoute);
app.use("/api/project", projectRoute);
app.use("/api/card", cardRoute);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(400).json({ message: error.message });
});

app.listen(5000, console.log("server is running... "));
