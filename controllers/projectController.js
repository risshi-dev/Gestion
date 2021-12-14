import Project from "../models/Project.js";
import User from "../models/User.js";

export const createProjectController = async (req, res) => {
  const { title, techStack, githubLink, deploymentLink } = req.body;

  const project = await Project.create({
    title,
    techStack,
    githubLink,
    deploymentLink,
  });

  if (!project) {
    res.status(400);
    throw new Error("Failed to create project");
  }

  const user = await User.findById(req.user_id);
  user.projects.push(project);
  await user.save();
  res.status(200).json({ project });
};

export const inviteSentController = async (req, res) => {
  const { email } = req.body;
  const receiver = await User.findOne({ email });

  if (receiver._id === req.user_id) {
    res.status(400);
    throw new Error("Cannot invite yourself");
  }

  const sender = await User.findById(req.user_id);

  const { invitesSent } = sender;

  if (invitesSent.forEach((invite) => invite.id === receiver._id)) {
    res.status(400);
    throw new Error("invite already sent");
  } else {
    invitesSent.push({ id: receiver._id });
    receiver.invitesReceived.push({ id: sender._id });

    await receiver.save();
    await sender.save();
  }

  if (receiver) {
    res.status(200).send("request sent");
  }
};

export const inviteReceivedController = async (req, res) => {
  const { senderId, isAccepted } = req.body;

  const receiver = await User.findById(req.user_id);
  const sender = await User.findById(senderId);
  const { invitesReceived } = receiver;

  invitesReceived = invitesReceived.filter((invite) => invite.id !== senderId);

  sender.invitesSent = sender.invitesSent.filter(
    (invite) => invite.id !== req.user_id
  );
  if (!isAccepted) {
    res.status(200).send("Invite Rejected");
  }
};
