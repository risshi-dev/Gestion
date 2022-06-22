import mongoose from "mongoose";

const comments = mongoose.Schema({
  id: { type: mongoose.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: true,
  },
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

  creator: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  todo: [description],
  comments: [comments],
  deadline: {
    type: Date,
    required: false,
  },
  priority: {
    type: Number,
    default: 0,
  },
  status: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
});
/*
 *Priority and status number depicts the following:
 *Number    Priority   Status
 *0         Low        Todo
 *1         Medium     In progress
 *2         High       Completed
 */
const Cards = mongoose.model("Cards", cards);

export default Cards;
