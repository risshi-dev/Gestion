import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongooseConnect from "./config/db.js";
import userRoute from "./routes/UserRoutes.js";
import projectRoute from "./routes/ProjectRoutes.js";
import cardRoute from "./routes/CardRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(cors());

dotenv.config();

await mongooseConnect();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("API is running...🤩");
//   next();
// });

app.use("/api/user", userRoute);
app.use("/api/project", projectRoute);
app.use("/api/card", cardRoute);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(400).json({ message: error.message });
});

app.listen(5000, console.log("server is running... "));
