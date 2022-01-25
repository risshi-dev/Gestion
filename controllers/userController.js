import User from "../models/User.js";
import bcrypt from "bcryptjs";
import tokenGenerator from "../config/token.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body.params;
  const isUser = await User.findOne({ email });

  if (!isUser) {
    res.status(404);
    throw new Error("User do not exist");
  } else {
    const User = isUser;
    const isMatch = await bcrypt.compare(password, User.password);

    if (isMatch) {
      res.cookie("token", tokenGenerator(User._id), {
        expires: new Date(86400000 + Date.now()),
        httpOnly: true,
      });
      res.status(200).json({
        email: User.email,
        username: User.username,
      });
    } else {
      res.status(401);
      throw new Error("Email or Password do not match");
    }
  }
};

export const signinController = async (req, res) => {
  const { username, email, password } = req.body.params;
  const isUser = await User.findOne({ email });

  if (isUser) {
    res.status(401);
    throw new Error("User already exists");
  } else {
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedpassword,
    });

    if (user) {
      res.cookie("token", tokenGenerator(user._id), {
        expires: new Date(86400000 + Date.now()),
        httpOnly: true,
      });
      res.status(200).json({ email, username });
    } else {
      res.status(400);
      throw new Error("failed to create user");
    }
  }
};

export const logoutController = async (req, res) => {
  res.cookie("token", "logging out", {
    expires: new Date(Date.now() - 86400000),
    httpOnly: true,
  });
  res.status(200).json({ message: "Logged out successfully" });
};
