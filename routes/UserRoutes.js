import express from "express";
import ash from "express-async-handler";

import {
  loginController,
  logoutController,
  signinController,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/signin", ash(signinController));
userRoute.post("/login", ash(loginController));
userRoute.get("/logout", ash(logoutController));

export default userRoute;
