import express from "express";
import ash from "express-async-handler";
import {
  createProjectController,
  deleteProject,
  getInvitesController,
  getProjectsController,
  getTeamMembers,
  inviteReceivedController,
  inviteSentController,
} from "../controllers/projectController.js";

import { isAuth } from "../middleware/isAuth.js";

const projectRoute = express.Router();

projectRoute.post("/create", isAuth, ash(createProjectController));
projectRoute.get("/getall", isAuth, ash(getProjectsController));
projectRoute.post("/sendinvite", isAuth, ash(inviteSentController));
projectRoute.post("/getinvites", isAuth, ash(getInvitesController));
projectRoute.post("/inviteresponse", isAuth, ash(inviteReceivedController));
projectRoute.post("/getTeams", isAuth, ash(getTeamMembers));
projectRoute.post("/deleteProject", isAuth, ash(deleteProject));

export default projectRoute;
