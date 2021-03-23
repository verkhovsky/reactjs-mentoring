import React from 'react';

import { MOVIES_DATA } from 'src/mocks/movies';
import { MovieList, FilterPanel } from './components';

export const Home = () => {
  return (
    <div className="home--wrapper">
      <FilterPanel></FilterPanel>
      <MovieList movies={MOVIES_DATA}></MovieList>
    </div>
  );
};
