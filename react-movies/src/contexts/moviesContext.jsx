import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./authContext";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  // Backend objects
  const [favorites, setFavorites] = useState([]); // {_id, movieId, title, posterPath}
  const [mustWatch, setMustWatch] = useState([]); // {_id, movieId, title, posterPath}
  const [myReviews, setMyReviews] = useState({});

  const { authToken } = useContext(AuthContext);

  /* -------------------- LOAD USER DATA -------------------- */
  useEffect(() => {
    if (!authToken) {
      setFavorites([]);
      setMustWatch([]);
      return;
    }

    const loadFavorites = async () => {
      try {
        const res = await fetch("/api/favorites", {
          headers: { Authorization: authToken },
        });
        const data = await res.json();
        setFavorites(data);
      } catch (err) {
        console.error("Failed to load favourites:", err);
      }
    };

    const loadMustWatch = async () => {
      try {
        const res = await fetch("/api/mustwatch", {
          headers: { Authorization: authToken },
        });
        const data = await res.json();
        setMustWatch(data);
      } catch (err) {
        console.error("Failed to load must-watch:", err);
      }
    };

    loadFavorites();
    loadMustWatch();
  }, [authToken]);

  /* -------------------- FAVORITES -------------------- */
  const addToFavorites = async (movie) => {
    if (!authToken || favorites.some((f) => f.movieId === movie.id)) return;

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify({
          movieId: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
        }),
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

    const fav = favorites.find((f) => f.movieId === movie.id);
    if (!fav) return;

    try {
      await fetch(`/api/favorites/${fav._id}`, {
        method: "DELETE",
        headers: { Authorization: authToken },
      });

      setFavorites(favorites.filter((f) => f.movieId !== movie.id));
    } catch (err) {
      console.error("Remove favourite failed:", err);
    }
  };

  /* -------------------- MUST WATCH -------------------- */
  const addToMustWatch = async (movie) => {
    if (!authToken || mustWatch.some((w) => w.movieId === movie.id)) return;

    try {
      const res = await fetch("/api/mustwatch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify({
          movieId: movie.id,
          title: movie.title,
          posterPath: movie.poster_path,
        }),
      });

      if (!res.ok) return;

      const newItem = await res.json();
      setMustWatch([...mustWatch, newItem]);
    } catch (err) {
      console.error("Add to must-watch failed:", err);
    }
  };

  const removeFromMustWatch = async (movie) => {
    if (!authToken) return;

    const item = mustWatch.find((w) => w.movieId === movie.id);
    if (!item) return;

    try {
      await fetch(`/api/mustwatch/${item._id}`, {
        method: "DELETE",
        headers: { Authorization: authToken },
      });
      setMustWatch(mustWatch.filter((w) => w.movieId !== movie.id));
    } catch (err) {
      console.error("Remove from must-watch failed:", err);
    }
  };

  /* -------------------- REVIEWS -------------------- */
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const removeReview = (movie) => {
    const updated = { ...myReviews };
    delete updated[movie.id];
    setMyReviews(updated);
  };

  /* -------------------- PROVIDER -------------------- */
  return (
    <MoviesContext.Provider
      value={{
        favorites: favorites.map((f) => f.movieId),
        mustWatch: mustWatch.map((w) => w.movieId),
        addToFavorites,
        removeFromFavorites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
        removeReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
