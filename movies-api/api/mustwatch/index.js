import express from "express";
import asyncHandler from "express-async-handler";
import MustWatch from "./mustwatchModel.js";
import authenticate from "../../authenticate/index.js";

const router = express.Router();

// Get logged-in user's must-watch list
router.get("/", authenticate, asyncHandler(async (req, res) => {
  const mustWatch = await MustWatch.find({ user: req.user._id });
  res.status(200).json(mustWatch);
}));

// Add a movie to must-watch
router.post("/", authenticate, asyncHandler(async (req, res) => {
  const exists = await MustWatch.findOne({ user: req.user._id, movieId: req.body.movieId });
  if (exists) return res.status(400).json({ message: "Movie already in must-watch" });

  const item = new MustWatch({
    user: req.user._id,
    movieId: req.body.movieId,
    title: req.body.title,
    posterPath: req.body.posterPath
  });

  await item.save();
  res.status(201).json(item);
}));

// Remove a movie from must-watch
router.delete("/:id", authenticate, asyncHandler(async (req, res) => {
  await MustWatch.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.status(200).json({ message: "Removed from must-watch" });
}));

export default router;
