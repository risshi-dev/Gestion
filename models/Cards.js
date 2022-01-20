import mongoose from "mongoose";

const comments = mongoose.Schema({
  id: { type: mongoose.Types.ObjectId, ref: "User" },
  comment: { type: String, required: true },
});

const description = mongoose.Schema({
  isChecked: {
    required: true,
    type: Boolean,
    default: false,
  },
  task: {
    type: String,
    required: true,
  },
});

const cards = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  todo: [description],
  comments: [comments],
});

const Cards = mongoose.model("Cards", cards);

export default Cards;
