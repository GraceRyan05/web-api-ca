import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies } from '../tmdb-api'; 
import authenticate from '../../authenticate';

const router = express.Router();

// movie routes to be added
router.get('/discover', authenticate, asyncHandler(async (req, res) => {
  console.log('Logged-in user:', req.user.username);
  const discoverMovies = await getMovies(); 
  res.status(200).json(discoverMovies);
}));

//add upcoming and genres
router.get('/upcoming', asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const upcomingMovies = await getMovies(page); 
  res.status(200).json(upcomingMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
  const genres = await getMovies(); 
  res.status(200).json(genres);
}));

export default router;
