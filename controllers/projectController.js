import mongoose from "mongoose";
import Project from "../models/Project.js";
import User from "../models/User.js";

export const createProjectController = async (req, res) => {
  const { title, techStack, githubLink, deploymentLink } = req.body.params;

  const project = await Project.create({
    title,
    techStack,
    githubLink,
    deploymentLink,
    isAdmin: true,
  });

  if (!project) {
    res.status(400);
    throw new Error("Failed to create project");
  }

  const user = await User.findById(req.user_id);
  user.projects.push({ id: project._id });
  project.teamMembers.push(user._id);

  await user.save();
  await project.save();

  res.status(200).json({ project });
};

export const inviteSentController = async (req, res) => {
  const { email, projectId } = req.body.params;
  const receiver = await User.findOne({ email });

  if (!receiver) {
    res.status(404);
    throw new Error("No user found with that emailID");
  }

  if (receiver._id === req.user_id) {
    res.status(400);
    throw new Error("Cannot invite yourself");
  }

  const project = await Project.findById(projectId);

  if (project.invitesSent.forEach((invite) => invite.id === receiver._id)) {
    res.status(400);
    throw new Error("invite already sent");
  } else {
    project.invitesSent.push({ id: receiver._id });
    receiver.invitesReceived.push({ id: req.user_id, projectId: projectId });

    await receiver.save();
    await project.save();

    res.status(200).send("request sent");
  }
};

export const inviteReceivedController = async (req, res) => {
  const { projectId, isAccepted, senderId } = req.body.params;

  const receiver = await User.findById(req.user_id);
  const project = await Project.findById(projectId);

  receiver.invitesReceived = receiver.invitesReceived.filter(
    (invite) => !invite.id.equals(mongoose.Types.ObjectId(senderId))
  );

  console.log(receiver.invitesReceived);

  project.invitesSent = project.invitesSent.filter(
    (invite) => invite.id.toString() !== req.user_id
  );

  if (!isAccepted) {
    res.status(200).send("Invite Rejected");
  }

  // invite accepted
  project.teamMembers.push(receiver._id);
  receiver.projects.push({ id: project._id });

  await project.save();
  await receiver.save();

  res.status(200).send("Invite accepted");
};
