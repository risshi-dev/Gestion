import express from "express";
import ash from "express-async-handler";

import { isAuth } from "../middleware/isAuth.js";

const cardRoute = express.Router();

cardRoute.post("/create", isAuth, ash(cardController.createCard));

export default cardRoute;
