import express from "express";
import ash from "express-async-handler";

import { isAuth } from "../middleware/isAuth.js";
import { createCardController } from "../controllers/cardController.js";

const cardRoute = express.Router();

cardRoute.post("/create", isAuth, ash(createCardController));

export default cardRoute;
