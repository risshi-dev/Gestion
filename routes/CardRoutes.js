import express from "express";
import ash from "express-async-handler";

import { isAuth } from "../middleware/isAuth.js";
import {
  createCardController,
  editCardController,
  getCardsController,
} from "../controllers/cardController.js";

const cardRoute = express.Router();

cardRoute.post("/create", isAuth, ash(createCardController));
cardRoute.post("/edit", isAuth, ash(editCardController));
cardRoute.post("/getall", isAuth, ash(getCardsController));

export default cardRoute;
