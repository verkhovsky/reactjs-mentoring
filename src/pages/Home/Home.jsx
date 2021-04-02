import React, { useCallback } from 'react';
import { arrayOf, func, object } from 'prop-types';

import { MovieList, FilterPanel } from './components';

export const Home = ({ movies, setSelectedMovie }) => {
  const handleItemClick = useCallback(
    id => {
      const currentMovie = movies.find(movie => movie.id === id);
      setSelectedMovie(currentMovie);

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    [movies, setSelectedMovie],
  );

  return (
    <div className="home--wrapper">
      <FilterPanel />
      <MovieList movies={movies} onItemClick={handleItemClick} />
    </div>
  );
};

Home.propTypes = {
  setSelectedMovie: func.isRequired,
  movies: arrayOf(object),
};
