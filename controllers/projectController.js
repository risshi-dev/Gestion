import mongoose from "mongoose";
import Project from "../models/Project.js";
import User from "../models/User.js";
import Cards from "../models/Cards.js";

export const createProjectController = async (req, res) => {
  const { title } = req.body.params;

  const currProjects = await User.findById(req.user_id)
    .select({ projects: 1 })
    .populate("projects");

  const found = await currProjects.projects.filter(
    (project) => project.title === title
  );

  if (found.length > 0) {
    res.status(200);
    throw new Error("Already a project with that name exists!");
  }

  const project = await Project.create({
    title,
    owner: req.user_id,
  });

  if (!project) {
    res.status(400);
    throw new Error("Failed to create project");
  }
  const user = await User.findById(req.user_id);

  user.projects.push(project._id);
  project.teamMembers.push(user._id);

  await user.save();
  await project.save();

  res.status(200).json({ project });
};

export const getProjectsController = async (req, res, next) => {
  const userId = req.user_id;
  const projects = await User.findById(userId)
    .select({ projects: 1 })
    .populate("projects");

  if (!projects) {
    res.status(400);
    throw new Error("Failed to get the projects");
  }
  res.status(200).send(projects);
};

export const inviteSentController = async (req, res) => {
  const { email, projectId } = req.body.params;
  const receiver = await User.findOne({ email });

  if (!receiver) {
    res.status(404);
    throw new Error("No user found with that emailID");
  }

  if (receiver._id.equals(mongoose.Types.ObjectId(req.user_id))) {
    res.status(400);
    throw new Error("Cannot invite yourself");
  }

  const project = await Project.findById(projectId);
  var flag = false;

  project.invitesSent.forEach((invite) =>
    invite.id.equals(receiver._id) ? (flag = true) : null
  );

  project.teamMembers.forEach((invite) =>
    invite.equals(receiver._id) ? (flag = true) : null
  );

  if (flag) {
    res.status(400);
    throw new Error("Already Sent");
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

  //console.log(receiver.invitesReceived);

  project.invitesSent = project.invitesSent.filter(
    (invite) => invite.id.toString() !== req.user_id
  );

  if (!isAccepted) {
    res.status(200).send("Invite Rejected");
  }

  // invite accepted
  project.teamMembers.push(receiver._id);
  receiver.projects.push(projectId);

  await project.save();
  await receiver.save();

  res.status(200).send("Invite accepted");
};

export const getInvitesController = async (req, res) => {
  const userId = req.user_id;

  const invites = await User.findById(userId)
    .populate([
      { path: "invitesReceived.projectId", select: "title" },
      { path: "invitesReceived.id", select: "username" },
    ])
    .select({ invitesReceived: 1 });

  // console.log(invites);
  if (!invites) {
    res.status(400);
    throw new Error("Server error occured while fetching invites!");
  }

  res.status(200).json({ invites });
};

export const getTeamMembers = async (req, res) => {
  const { projectId } = req.body.params;

  const project = await Project.findById(projectId)
    .populate({ path: "teamMembers", select: "username" })
    .select("teamMembers");

  if (project) res.status(200).send(project);
};

export const deleteProject = async (req, res) => {
  const { projectId } = req.body.params;
  const userId = req.user_id;
  const project = await Project.findById(projectId).populate(
    "cards teamMembers"
  );

  if (userId === project.owner.toString()) {
    const user = await User.findById(userId).populate("projects");

    const remainingProjects = user.projects.filter(
      (project) => project._id.toString() !== projectId
    );

    user.projects = [...remainingProjects];

    await user.save();

    const cards = project.cards;

    cards?.forEach(async (card) => await Cards.deleteOne({ _id: card._id }));

    project.teamMembers?.forEach(async (member) => {
      const dummy = await User.findById(member._id).populate("projects");

      const remainingProjects = dummy.projects.filter(
        (project) => project._id.toString() !== projectId
      );

      dummy.projects = [...remainingProjects];

      await dummy.save();
    });

    await Project.deleteOne({ _id: projectId });

    res.status(200).send("Project Removed Successfully");
  } else {
    res.status(400).send("Unauthorised Access");
  }
};
