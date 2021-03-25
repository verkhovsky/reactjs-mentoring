import React, { useState, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  Header,
  ErrorBoundary,
  Footer,
  MovieDetails,
  Button,
} from 'src/components';
import { MOVIES_DATA } from 'src/mocks/movies';

import { Home } from '../Home';

export const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOnSearchClick = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const movieDetails = useMemo(() => {
    if (!selectedMovie) return null;
    const { releaseDate, ...restMovie } = selectedMovie;

    return (
      <MovieDetails releaseYear={releaseDate.getFullYear()} {...restMovie} />
    );
  }, [selectedMovie]);

  const searchButton = useMemo(() => {
    if (!selectedMovie) return null;

    return (
      <Button
        className="second-header--search-button"
        onClick={handleOnSearchClick}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    );
  }, [selectedMovie, handleOnSearchClick]);

  return (
    <div className="main--wrapper">
      <Header headerContent={movieDetails} secondHeaderContent={searchButton} />
      <ErrorBoundary>
        <Home movies={MOVIES_DATA} setSelectedMovie={setSelectedMovie} />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
