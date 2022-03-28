import mongoose from "mongoose";

const invites = mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

// removing unique true from title because multiple users can have a project with same name
// modified the createProject controller to only allow unique titles as of now
const project = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  cards: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Cards",
    },
  ],
  invitesSent: [invites],
  teamMembers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

// TODO: add a 'isAdmin' field in every object of team members to provide edit rights to right person

const Project = mongoose.model("Project", project);
export default Project;
