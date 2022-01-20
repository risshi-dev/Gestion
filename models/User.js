import mongoose from "mongoose";

const invites = mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
  },
});

const userModel = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  githubId: {
    type: String,
    required: false,
  },
  profilePic: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  invitesReceived: [invites],
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  ],
});

const User = mongoose.model("User", userModel);
export default User;
