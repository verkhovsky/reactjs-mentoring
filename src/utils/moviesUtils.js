export const getSortedMovies = (movies = [], sortBy) =>
  movies.sort((movie, nextMovie) => {
    if (sortBy === 'release_date') {
      return new Date(nextMovie[sortBy]) - new Date(movie[sortBy]);
    }

    return nextMovie[sortBy] - movie[sortBy];
  });

export const getFilteredMovies = (movies = [], filterBy) =>
  movies.filter(movie => movie.genres.includes(filterBy));

export const getCurrentMovies = (movies = [], sortBy, filterBy) => {
  const sortedMovies = sortBy ? getSortedMovies([...movies], sortBy) : movies;

  const filteredMovies =
    filterBy && filterBy !== 'All'
      ? getFilteredMovies(sortedMovies, filterBy)
      : sortedMovies;

  return filteredMovies;
};

export const prepareMovie = movie => {
  let { release_date, genres, ...restMovie } = movie;
  release_date =
    release_date instanceof Date
      ? release_date.toISOString().split('T')[0]
      : release_date;

  genres = genres.map(({ value }) => value);

  return {
    release_date,
    genres,
    ...restMovie,
  };
};
