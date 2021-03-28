import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  Header,
  ErrorBoundary,
  Footer,
  MovieDetails,
  Button,
} from 'src/components';
import { getMovies } from 'src/models/selectors/movies';
import { fetchMovies } from 'src/models/actions/movies';

import { Home } from '../Home';

export const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOnSearchClick = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies);
  }, [dispatch]);

  const movies = useSelector(getMovies);

  const movieDetails = useMemo(() => {
    if (!selectedMovie) return null;

    const {
      title,
      poster_path,
      release_date,
      genres,
      runtime,
      overview,
      vote_average,
    } = selectedMovie;

    return (
      <MovieDetails
        title={title}
        imageUrl={poster_path}
        rating={vote_average}
        releaseYear={new Date(release_date).getFullYear()}
        genre={genres.join(', ')}
        runtime={runtime}
        overview={overview}
      />
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
        <Home movies={movies} setSelectedMovie={setSelectedMovie} />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
