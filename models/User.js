import mongoose from "mongoose";
const invites = mongose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
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
  invitesSent: [invites],
  invitesReceived: [invites],
});

const User = mongoose.model("User", userModel);
export default User;
