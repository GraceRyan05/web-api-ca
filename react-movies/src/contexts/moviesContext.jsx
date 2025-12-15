import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./authContext";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  // favourites stored as full backend objects
  // { _id, movieId, title, posterPath }
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);

  const { authToken } = useContext(AuthContext);

  /* -------------------- LOAD USER FAVOURITES -------------------- */
  useEffect(() => {
    if (!authToken) {
      setFavorites([]);
      return;
    }

    const loadFavorites = async () => {
      try {
        const res = await fetch("/api/favorites", {
          headers: { Authorization: authToken }
        });
        const data = await res.json();
        setFavorites(data);
      } catch (err) {
        console.error("Failed to load favourites:", err);
      }
    };

    loadFavorites();
  }, [authToken]);

  /* -------------------- FAVORITES -------------------- */
  const addToFavorites = async (movie) => {
    if (!authToken) return;

    // already favourited?
    if (favorites.some(f => f.movieId === movie.id)) return;

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken
        },
        body: JSON.stringify({
          movieId: movie.id,
          title: movie.title,
          posterPath: movie.poster_path
        })
      });

      if (!res.ok) return;

      const newFav = await res.json();
      setFavorites([...favorites, newFav]);
    } catch (err) {
      console.error("Add favourite failed:", err);
    }
  };

  const removeFromFavorites = async (movie) => {
    if (!authToken) return;

    const fav = favorites.find(f => f.movieId === movie.id);
    if (!fav) return;

    try {
      await fetch(`/api/favorites/${fav._id}`, {
        method: "DELETE",
        headers: { Authorization: authToken }
      });

      setFavorites(favorites.filter(f => f.movieId !== movie.id));
    } catch (err) {
      console.error("Remove favourite failed:", err);
    }
  };

  /* -------------------- REVIEWS -------------------- */
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  /* -------------------- MUST WATCH -------------------- */
  const addToMustWatch = (movie) => {
    if (!mustWatch.includes(movie.id)) {
      setMustWatch([...mustWatch, movie.id]);
    }
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter(id => id !== movie.id));
  };

  /* -------------------- PROVIDER -------------------- */
  return (
    <MoviesContext.Provider
      value={{
        // expose ONLY movie IDs to UI (unchanged behaviour)
        favorites: favorites.map(f => f.movieId),
        mustWatch,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToMustWatch,
        removeFromMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
