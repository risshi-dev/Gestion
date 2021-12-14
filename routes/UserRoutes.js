import express from "express";
import ash from "express-async-handler";
import {
  loginController,
  signinController,
} from "../controllers/userController.js";
const userRoute = express.Router();

userRoute.post("/signin", ash(signinController));
userRoute.post("/login", ash(loginController));
userRoute.post("/sendinvite", ash());

export default userRoute;
