import jwt from "jsonwebtoken";
import ash from "express-async-handler";
export const isAuth = ash((req, res, next) => {
  // const authHeader = req.headers.authorization;

  // const error = new Error("Not authenticated");
  // error.statusCode = 401;

  // if (!authHeader) {
  //   throw error;
  // }
  const cook = req.headers.cookie;
  const index = cook.search("; token=");

  const token = cook.slice(index + 8);
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    err.statusCode = 500;
    console.log(err);
  }

  if (!decodedToken) {
    console.log(error);
  }
  req.user_id = decodedToken.id;
  next();
});
