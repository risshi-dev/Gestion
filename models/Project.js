import mongoose from "mongoose";
import User from "./User";

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

const project = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  techStack: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  deploymentLink: {
    type: String,
  },

  invitesSent: [invites],

  teamMembers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

const Project = mongoose.model("Project", project);
export default Project;
