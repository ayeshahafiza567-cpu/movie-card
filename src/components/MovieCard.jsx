import React, { useEffect, useState } from "react";

function MovieCard({ movie, onFavoriteChange }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    const alreadyFavorite = favorites.some(
      (item) => item.id === movie.id
    );

    setIsFavorite(alreadyFavorite);
  }, [movie.id]);

  const handleFavorite = () => {
    let favorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    const alreadyFavorite = favorites.some(
      (item) => item.id === movie.id
    );

    if (alreadyFavorite) {
      favorites = favorites.filter(
        (item) => item.id !== movie.id
      );

      setIsFavorite(false);
    } else {
      favorites.push(movie);

      setIsFavorite(true);
    }

    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(favorites)
    );

    if (onFavoriteChange) {
      onFavoriteChange(favorites);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-image"
        />

        <button
          className={
            isFavorite
              ? "favorite-button favorite-active"
              : "favorite-button"
          }
          onClick={handleFavorite}
          title={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          ♥
        </button>
      </div>

      <div className="movie-details">
        <h3>{movie.title}</h3>

        <p>{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;