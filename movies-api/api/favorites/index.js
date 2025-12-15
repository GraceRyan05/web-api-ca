import express from 'express';
import asyncHandler from 'express-async-handler';
import Favorite from './favoriteModel.js';
import authenticate from '../../authenticate/index.js';

const router = express.Router();

// Get logged-in user's favourites
router.get('/', authenticate, asyncHandler(async (req, res) => {
  console.log('Logged-in user:', req.user.username);

  const favorites = await Favorite.find({
    user: req.user._id
  });

  res.status(200).json(favorites);
}));

// Add a movie to favourites
router.post('/', authenticate, asyncHandler(async (req, res) => {
  const favorite = new Favourite({
    user: req.user._id,
    movieId: req.body.movieId,
    title: req.body.title,
    posterPath: req.body.posterPath
  });

  await favorite.save();
  res.status(201).json(favorite);
}));

// Remove a favourite
router.delete('/:id', authenticate, asyncHandler(async (req, res) => {
  await Favorite.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id
  });

  res.status(200).json({ message: 'Favorite removed' });
}));

export default router;
