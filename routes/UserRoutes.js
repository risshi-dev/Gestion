import express from "express";
import ash from "express-async-handler";
import {
  createProjectController,
  inviteReceivedController,
  inviteSentController,
} from "../controllers/projectController.js";
import {
  loginController,
  signinController,
} from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";
const userRoute = express.Router();

userRoute.post("/signin", ash(signinController));
userRoute.post("/login", ash(loginController));
userRoute.post("/create", isAuth, ash(createProjectController));
userRoute.post("/sendinvite", ash(inviteSentController));
userRoute.post("/inviteresponse", ash(inviteReceivedController));

export default userRoute;
