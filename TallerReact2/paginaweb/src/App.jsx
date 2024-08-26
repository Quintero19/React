import React from 'react';
import MovieList from './MovieList';

const movies = [
  { id: 1, title: 'Casablanca', director: 'Michael Curtiz', year: 1942 },
  { id: 2, title: 'Gone with the Wind', director: 'Victor Fleming', year: 1939 },
  { id: 3, title: 'Citizen Kane', director: 'Orson Welles', year: 1941 },
  { id: 4, title: 'Titanic', director: 'James Cameron', year: 1997 },
  { id: 5, title: 'Citizen Kane', director: 'Gábor Csupó', year:2008 },

];

const App = () => {
  return (
    <div className="app">
      <h1>Peliculas Clasicas</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
