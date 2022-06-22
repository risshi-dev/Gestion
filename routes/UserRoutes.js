import express from "express";
import ash from "express-async-handler";

import {
  loginController,
  logoutController,
  signinController,
  updateController,
} from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";

const userRoute = express.Router();

userRoute.post("/signin", ash(signinController));
userRoute.post("/login", ash(loginController));
userRoute.post("/updateUser", isAuth, ash(updateController));
userRoute.get("/logout", ash(logoutController));

export default userRoute;
