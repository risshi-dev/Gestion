import mongoose from "mongoose";

const invites = mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
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

// TODO: add a 'isAdmin' field in every object of team members to provide edit rights to right person

const Project = mongoose.model("Project", project);
export default Project;
