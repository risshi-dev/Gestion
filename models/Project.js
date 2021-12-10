import mongoose from "mongoose";
import User from "./User";
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
  temaMembers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

const Project = mongoose.model("Project", project);
export default Project;
