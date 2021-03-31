import { createSelector } from 'reselect';

import { getCurrentMovies } from 'src/utils/moviesUtils';

export const getMoviesState = state => state.movies;

export const getAllMovies = createSelector(
  getMoviesState,
  moviesState => moviesState.movies.data,
);
export const getSortBy = createSelector(getMoviesState, state => state.sortBy);
export const getFilterBy = createSelector(
  getMoviesState,
  state => state.filterBy,
);

export const getMovies = createSelector(
  getAllMovies,
  getSortBy,
  getFilterBy,
  (movies, sortBy, filterBy) => getCurrentMovies(movies, sortBy, filterBy),
);

export const getMoviesLoading = createSelector(
  getMoviesState,
  moviesState => moviesState.isLoading,
);
