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

  let token = "";
  // req.headers.Authrization = `Bearer ${token}`
  for (
    let i = cook.search("token=") + 6;
    cook[i] != ";" && i < cook.length;
    i++
  ) {
    token += cook[i];
  }
  console.log(token);
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    err.statusCode = 500;
    console.log(err, "here");
    throw err;
  }

  if (!decodedToken) {
    console.log(error);
  }
  console.log(decodedToken);
  req.user_id = decodedToken.id;
  next();
});
