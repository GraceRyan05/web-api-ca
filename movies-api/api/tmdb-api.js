import fetch from 'node-fetch';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.TMDB_KEY;

//-------------------- DISCOVER -------------------- //
export const getMovies = async (page = 1) => {
  const response = await fetch(
    `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=${page}`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- Upcoming -------------------- //
export const getUpcomingMovies = async (page = 1) => {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- TRENDING -------------------- //
export const getTrendingMovies = async () => {
  const response = await fetch(
    `${baseUrl}/trending/movie/week?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- POPULAR -------------------- //
export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- TOP RATED -------------------- //
export const getTopRatedMovies = async (page = 1) => {
  const response = await fetch(
    `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- NOW PLAYING -------------------- //
export const getNowPlayingMovies = async (page = 1) => {
  const response = await fetch(
    `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- MOVIE DETAILS -------------------- //
export const getMovie = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- MOVIE CREDITS -------------------- //
export const getMovieCredits = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- REVIEWS -------------------- //
export const getMovieReviews = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}/reviews?api_key=${apiKey}&language=en-US`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- PERSON DETAILS -------------------- //
export const getPersonDetails = async (id) => {
  const response = await fetch(
    `${baseUrl}/person/${id}?api_key=${apiKey}&language=en-US`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  return await response.json();
};

//-------------------- MOVIE IMAGES -------------------- //
export const getMovieImages = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}/images?api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error((await response.json()).message);
  }
  return await response.json();
};

//-------------------- MOVIE RECOMMENDATIONS -------------------- //
export const getMovieRecommendations = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error((await response.json()).message);
  }
  return await response.json();
};

//-------------------- PERSON MOVIE CREDITS -------------------- //
export const getPersonMovieCredits = async (id) => {
  const response = await fetch(
    `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`
  );
  if (!response.ok) {
    throw new Error((await response.json()).message);
  }
  return await response.json();
};

//-------------------- PERSON IMAGES -------------------- //
export const getPersonImages = async (id) => {
  const response = await fetch(
    `${baseUrl}/person/${id}/images?api_key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error((await response.json()).message);
  }
  return await response.json();
};

//-------------------- GENRES LIST -------------------- //
export const getGenres = async () => {
  const response = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);
  if (!response.ok) {
    throw new Error((await response.json()).message);
  }
  return await response.json();
};

//-------------------- SEARCH MOVIES -------------------- //
export const searchMovies = async (query) => {
  const response = await fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(query)}&include_adult=false`
  );

  if (!response.ok) {
    throw new Error((await response.json()).message);
  }

  const data = await response.json();
  return data.results;
};



