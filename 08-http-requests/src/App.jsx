import React, { useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async function () {
    setIsLoading(true);

    const response = await fetch('https://swapi.dev/api/films/', {
      method: 'GET',
    });

    if (!response.ok)
      throw new Error('Couldnt fetch movies data, something went wrong!');

    const { results } = await response.json();

    results.sort((a, b) => a.episode_id - b.episode_id);

    setMovies(results);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
