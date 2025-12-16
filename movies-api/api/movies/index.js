import express from 'express';
import asyncHandler from 'express-async-handler';
import { 
  getMovies,
  getUpcomingMovies,
  getGenres,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getMovie,
  getMovieCredits,
  getMovieReviews,
  getMovieImages,
  getMovieRecommendations,
  getPersonDetails,
  getPersonMovieCredits,
  getPersonImages,
  searchMovies
 } from '../tmdb-api'; 

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
  const upcomingMovies = await getUpcomingMovies(page); // use TMDb function directly
  res.status(200).json(upcomingMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
  const genres = await getGenres(); // use TMDb function directly
  res.status(200).json(genres);
}));

//trending
router.get('/trending', asyncHandler(async (req, res) => {
  const movies = await getTrendingMovies();
  res.status(200).json(movies);
}));

//popular 
router.get('/popular', asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const movies = await getPopularMovies(page);
  res.status(200).json(movies);
}));

//top rated
router.get('/toprated', asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const movies = await getTopRatedMovies(page);
  res.status(200).json(movies);
}));

//now playing
router.get('/nowPlaying', asyncHandler(async (req, res) => {
  const page = req.query.page || 1;
  const movies = await getNowPlayingMovies(page);
  res.status(200).json(movies);
}));

//movie details
router.get('/:id', asyncHandler(async (req, res) => {
  const movie = await getMovie(req.params.id);
  res.status(200).json(movie);
}));

//movie credits
router.get('/:id/credits', asyncHandler(async (req, res) => {
  const credits = await getMovieCredits(req.params.id);
  res.status(200).json(credits);
}));

//movie reviews
router.get('/:id/reviews', asyncHandler(async (req, res) => {
  const reviews = await getMovieReviews(req.params.id);
  res.status(200).json(reviews);
}));

//movie images
router.get('/:id/images', asyncHandler(async (req, res) => {
  const images = await getMovieImages(req.params.id);
  res.status(200).json(images);
}));

//movie recommendations
router.get('/:id/recommendations', asyncHandler(async (req, res) => {
  const recommendations = await getMovieRecommendations(req.params.id);
  res.status(200).json(recommendations);
}));

//person details 
router.get('/person/:id', asyncHandler(async (req, res) => {
  const person = await getPersonDetails(req.params.id);
  res.status(200).json(person);
}));

//person movie credits
router.get('/person/:id/movie-credits', asyncHandler(async (req, res) => {
  const credits = await getPersonMovieCredits(req.params.id);
  res.status(200).json(credits);
}));

//person images
router.get('/person/:id/images', asyncHandler(async (req, res) => {
  const images = await getPersonImages(req.params.id);
  res.status(200).json(images);
}));

// Search movies by query
router.get('/search/:query', asyncHandler(async (req, res) => {
  const query = req.params.query;
  const results = await searchMovies(query);
  res.status(200).json(results);
}));


export default router;
