import express from "express";
import ash from "express-async-handler";
import {
  createProjectController,
  inviteReceivedController,
  inviteSentController,
} from "../controllers/projectController.js";

import { isAuth } from "../middleware/isAuth.js";

const projectRoute = express.Router();

projectRoute.post("/create", isAuth, ash(createProjectController));
projectRoute.post("/sendinvite", isAuth, ash(inviteSentController));
projectRoute.post("/inviteresponse", isAuth, ash(inviteReceivedController));

export default projectRoute;
