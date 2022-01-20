import express from "express";
import ash from "express-async-handler";

import { isAuth } from "../middleware/isAuth.js";
import {
  createCardController,
  editCardController,
  getCardsController,
} from "../controllers/cardController.js";

const cardRoute = express.Router();

cardRoute.post("/create", ash(createCardController));
cardRoute.post("/edit", ash(editCardController));
cardRoute.post("/getall", ash(getCardsController));

export default cardRoute;
