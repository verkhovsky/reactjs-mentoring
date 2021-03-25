export const getResultsText = movies => {
  if (!movies.length) {
    return 'No movies found';
  }

  return movies.length > 1 ? 'movies found' : 'movie found';
};
