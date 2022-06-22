import Card from "../models/Cards.js";
import Project from "../models/Project.js";

let emptyCard = {
  title: "",
  todo: [],
  comments: [],
  description: "",
};

export const createCardController = async (req, res, next) => {
  const { title, priority, description, projectId, deadline } = req.body.params;

  const card = await Card.create({
    ...emptyCard,
    title,
    priority,
    description,
    deadline,
    creator: req.user_id,
  });

  // console.log(card);

  if (!card) {
    res.status(400);
    throw new Error("Failed to create the card");
  }

  const project = await Project.findById(projectId);
  project.cards.push(card._id);

  await project.save();
  res.status(200).send({ card });
};

export const editCardController = async (req, res, next) => {
  const { newCard } = req.body.params;

  const savedCard = await Card.findOneAndUpdate({ _id: newCard._id }, newCard, {
    new: true,
  });

  if (!savedCard) {
    res.status(400);
    throw new Error("Failed to edit the card");
  }

  res.status(200).send({ savedCard });
};

export const getCardsController = async (req, res, next) => {
  const { projectId } = req.body.params;

  const cards = await Project.findById(projectId)
    .select({ cards: 1 })
    .populate("cards");

  if (!cards) {
    res.status(400);
    throw new Error("Failed to get all the cards");
  }

  res.status(200).send(cards);
};

// export const addComment = async(req, res, next) =>{
//     const {comment}
// }
