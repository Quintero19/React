import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieCard;
