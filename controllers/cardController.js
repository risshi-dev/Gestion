import Card from "../models/Cards.js";
import Project from "../models/Project.js";

export const createCard = async (req, res, next) => {
  const { title, projectId } = req.body.params;

  const card = await Card.create({ title: title });

  if (!card) {
    res.status(400);
    throw new Error("Failed to create the card");
  }

  const project = await Project.findById(projectId);
  project.cards.push(card._id);

  await project.save();
  res.status(200).send("Card created successfully!");
};

// export const addComment = async(req, res, next) =>{
//     const {comment}
// }
