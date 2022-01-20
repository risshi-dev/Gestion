import express from "express";
import ash from "express-async-handler";

import { isAuth } from "../middleware/isAuth.js";
import { createCard } from "../controllers/cardController.js";
const cardRoute = express.Router();

cardRoute.post("/create", isAuth, ash(createCard));
// cardRoute.post("/addcomment", isAuth, ash(addComment));

export default cardRoute;
