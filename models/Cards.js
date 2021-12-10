import mongoose from "mongoose";

const comments = mongoose.Schema({
  id: { type: mongoose.Types.ObjectId, ref: "User" },
  comment: { type: String, required: true },
});

const description = mongoose.Schema({
  isChecked: {
    required: true,
    type: Boolean,
  },
  text: {
    type: String,
    required: true,
  },
});

const cards = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: [description],
  comments: [comments],
});

const Cards = mongoose.model("Cards", cards);

export default Cards;
