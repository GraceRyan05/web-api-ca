// Fetch discover movies from backend (requires JWT)
export const getMovies = async () => {
  const response = await fetch('http://localhost:8080/api/movies/discover', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Something went wrong');
  }
  return response.json();
};


// Upcoming movies
export const getUpcomingMovies = (page = 1) => {
  return fetch(`http://localhost:8080/api/movies/upcoming?page=${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Genres
export const getGenres = () => {
  return fetch('http://localhost:8080/api/movies/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Movie reviews
export const getMovieReviews = (id) => {
  return fetch(`http://localhost:8080/api/movies/${id}/reviews`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Movie details
export const getMovie = ({ queryKey }) => {
  const [, { id }] = queryKey;
  return fetch(`http://localhost:8080/api/movies/${id}`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Movie images
export const getMovieImages = ({ queryKey }) => {
  const [, { id }] = queryKey; 
  return fetch(`http://localhost:8080/api/movies/${id}/images`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};


// Top rated movies
export const getTopRatedMovies = (page = 1) => {
  return fetch(`http://localhost:8080/api/movies/topRated?page=${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Popular movies
export const getPopularMovies = (page = 1) => {
  return fetch(`http://localhost:8080/api/movies/popular?page=${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};


// Trending movies
export const getTrendingMovies = () => {
  return fetch('http://localhost:8080/api/movies/trending', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Now playing
export const getNowPlaying = (page = 1) => {
  return fetch(`http://localhost:8080/api/movies/nowPlaying?page=${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};
  
// Movie credits
export const getMovieCredits = ({ queryKey }) => {
  const [, { id }] = queryKey;
  return fetch(`http://localhost:8080/api/movies/${id}/credits`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Movie recommendations
export const getMovieRecommendations = (id) => {
  return fetch(`http://localhost:8080/api/movies/${id}/recommendations`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};

// Person details
export const getPerson = ({ queryKey }) => {
  const [, { id }] = queryKey;
  return fetch(`http://localhost:8080/api/movies/person/${id}`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Failed to fetch person');
    return res.json();
  });
};

// Person movie credits
export const getPersonMovieCredits = ({ queryKey }) => {
  const [, { id }] = queryKey; 
  return fetch(`http://localhost:8080/api/movies/person/${id}/movie-credits`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Failed to fetch movie credits');
    return res.json();
  });
};

// Person images
export const getPersonImages = ({ queryKey }) => {
  const [, { id }] = queryKey; 
  return fetch(`http://localhost:8080/api/movies/person/${id}/images`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  }).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};


//Search feature
export const getSearchResults = ({ queryKey }) => {
  const [, { query }] = queryKey; 
  return fetch(`http://localhost:8080/api/movies/search/${query}`, {
    headers: { 'Authorization': window.localStorage.getItem('token') }
  })
  .then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
};


// User authentication: login and signup
export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};




